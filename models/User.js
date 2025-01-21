import mongoose from "mongoose";

const paymentsSchema = new mongoose.Schema({
  dateRange: String,
  month: String,
  revenue: Number,
  isPaid: Boolean,
});

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    commission: {
      type: Number,
      required: true,
    },
    enableWarning: Boolean,
    warningMessage: String,
    currentRevenue: Number,
    otp: String,
    otpExpires: Number,
    payments: [paymentsSchema],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
