import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      connectTimeoutMS: 10000, // 10 seconds
      socketTimeoutMS: 45000, // 45 seconds
      serverSelectionTimeoutMS: 5000, // 5 seconds
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });

    // Handle disconnection and attempt to reconnect
    // mongoose.connection.on("disconnected", () => {
    //   console.log("MongoDB disconnected! Attempting to reconnect...");
    //   setTimeout(() => {
    //     mongoose
    //       .connect(MONGODB_URI, opts)
    //       .then(() => console.log("MongoDB reconnected"))
    //       .catch((err) => console.error("MongoDB reconnection error:", err));
    //   }, 5000); // Wait 5 seconds before attempting to reconnect
    // });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
      mongoose.connect(MONGODB_URI, opts)
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
