import Head from "next/head";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import MarketplaceHeroSec from "@/components/MarketplaceHeroSec";

export default function marketplace() {
  return (
    <>
      <Head>
        <title>Marketplace</title>
      </Head>
      <Nav />
      <MarketplaceHeroSec />
      <Footer />
    </>
  )
}