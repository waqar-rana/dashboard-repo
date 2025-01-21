import Header from "@/app/components/header";
import Link from "next/link";

export default function NotAvailable() {
  return (
    <>
      <Header />
      <section className="bg-gray-900 h-[80vh] w-screen flex items-center justify-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-500">
              Whoops!
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
              This page is Not Avilable due to some Technical Issues
            </p>
            <p className="mb-4 text-lg font-light text-gray-400">
              We are working hard to solve the issue.{" "}
              <Link className="text-blue-500" href={"mailto:socialseo090@gmail.com"}>
                Contact Admin
              </Link>
              {" "}For Further Details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
