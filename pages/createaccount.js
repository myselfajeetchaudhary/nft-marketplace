import Head from "next/head";
import CreateAccountHeroSec from "@/components/CreateAccountHeroSec";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function createaccount() {
  return (
    <>
      <Head>
        <title>Create Account</title>
      </Head>
      <Nav />
      <CreateAccountHeroSec />
      <Footer />
    </>
  )
}