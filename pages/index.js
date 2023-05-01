import Head from 'next/head'
import Nav from '@/components/Nav.jsx'
import Hero from '@/components/Hero'
import TrendingCollection from '@/components/TrendingCollection'
import TopCreators from '@/components/TopCreators'
import DiscoverNFTs from '@/components/DiscoverNFTs'
import BrowseCategories from '@/components/BrowseCategories'
import HowItWork from '@/components/HowItWorks'
import JoinWD from '@/components/JoinWD'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Nav />
      <Hero />
      <TrendingCollection />
      <TopCreators />
      <BrowseCategories />
      <DiscoverNFTs />
      <HowItWork />
      <JoinWD />
      <Footer />
    </>
  )
}
