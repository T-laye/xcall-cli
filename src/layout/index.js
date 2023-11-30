import DropBoxes from "@/components/DropBoxes";
import Header from "@/components/sections/Header";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Layout({ title, children }) {
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const currentScrollPos = window.pageYOffset;
  //       setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
  //       setPrevScrollPos(currentScrollPos);
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, [prevScrollPos]);
  return (
    <>
      <Head>
        <title>{title ? `${title} | Validator` : "Validator"}</title>
        <meta name="description" content="Smart Contract Validator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <DropBoxes />
      <main className=" overflow-hidden">{children}</main>
    </>
  );
}
