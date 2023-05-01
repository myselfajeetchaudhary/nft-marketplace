import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Head from "next/head";
import RankingsHeroSec from "@/components/RankingsHeroSec";

export default function rankings() {
  return (
    <>
      <Head>
        <title>Rankings</title>
      </Head>
      <Nav />
      <RankingsHeroSec />
      <Footer />
    </>
  )
}