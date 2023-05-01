import Head from "next/head";
import Nav from "@/components/Nav";
import ArtistPageHeroSection from "@/components/ArtistPageHeroSection";
import Footer from "@/components/Footer";

export default function artist() {
  return (
    <>
      <Head>
        <title>NFT Artists</title>
      </Head>
      <Nav />
      <ArtistPageHeroSection />
      <Footer />
    </>
  )
}