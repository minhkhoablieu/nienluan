import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
export default function Home() {
  return (
    <>
      <button className="bg-gray-100">test</button>
    </>
  );
}
Home.Layout = MainLayout;
