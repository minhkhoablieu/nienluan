import Head from "next/head";

function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Hello world</title>
      </Head>
      {children}
    </>
  );
}
export default MainLayout;
