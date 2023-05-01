import ConnectWalletHeroSec from "@/components/ConnectWalletHeroSec"
import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import Head from "next/head"

export default function connectwallet() {
  return (
    <>
      <Head>
        <title>Connect Wallet</title>
      </Head>
      <Nav />
      <ConnectWalletHeroSec />
      <Footer />
    </>
  )
}