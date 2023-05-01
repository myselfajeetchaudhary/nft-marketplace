import Image from "next/image"
import icon1 from "../public/custom icons/Icon.png"
import icon2 from "../public/custom icons/Icon-1.png"
import icon3 from "../public/custom icons/Icon-2.png"
import HowItWorksCard from "./HowItWorksCard"

function HowItWorks() {
  return (
    <section className="flex items-center justify-center">
        <div className="w-[315px] h-auto md:w-[690px] lg:w-[1050px] my-[40px] lg:my-[80px]">
            <div className=" mb-[40px] lg:mb-[48px]">
                <h2 className="capitalize font-semibold text-[28px] lg:text-[38px] leading-[39px] lg:leading-[46px] mb-[10px]">How It Works</h2>
                <p className="capitalize text-[16px] leading-[22px] lg:text-[22px] lg:leading-[35px]">Find out how to get started</p>
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] lg:gap-[30px]">
                <HowItWorksCard icon={icon1} title="Setup Your wallet" content="Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner." />
                <HowItWorksCard icon={icon2} title="Create Collection" content="Upload your work and setup your collection. Add a description, social links and floor price." />
                <HowItWorksCard icon={icon3} title="Start Earning" content="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others." />
            </div>
        </div>
    </section>
  )
}

export default HowItWorks