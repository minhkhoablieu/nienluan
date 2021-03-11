import Head from "next/head";
import Image from "next/image";

function AuthLayout({ children }) {
  return (
    <>
      <Head>
        <title>Login Form</title>
      </Head>
      <div className="grid grid-cols-12 h-screen">
        <div
          style={{ background: "url(/images/background/auth.jpg)" }}
          className="bg-black col-span-7 md:col-span-8 hidden md:block"
        ></div>
        <div className="col-span-12 sm:col-span-5 md:col-span-4">
          {children}
        </div>
      </div>
    </>
  );
}
export default AuthLayout;
