import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import NFTCard from "./NFTCard"
import avatar8 from "../public/avatars/Avatar Placeholder-8.png"
import avatar9 from "../public/avatars/Avatar Placeholder-9.png"
import avatar10 from "../public/avatars/Avatar Placeholder-10.png"
import avatar11 from "../public/avatars/Avatar Placeholder-11.png"
import avatar12 from "../public/avatars/Avatar Placeholder-12.png"
import avatar13 from "../public/avatars/Avatar Placeholder-13.png"
import avatar14 from "../public/avatars/Avatar Placeholder-14.png"
import avatar15 from "../public/avatars/Avatar Placeholder-15.png"
import avatar16 from "../public/avatars/Avatar Placeholder-16.png"
import avatar17 from "../public/avatars/Avatar Placeholder-17.png"
import avatar18 from "../public/avatars/Avatar Placeholder-18.png"
import avatar19 from "../public/avatars/Avatar Placeholder-19.png"
import nftcard8 from "../public/nft cards/Image Placeholder-8.png"
import nftcard9 from "../public/nft cards/Image Placeholder-9.png"
import nftcard10 from "../public/nft cards/Image Placeholder-10.png"
import nftcard11 from "../public/nft cards/Image Placeholder-11.png"
import nftcard13 from "../public/nft cards/Image Placeholder-13.png"
import nftcard14 from "../public/nft cards/Image Placeholder-14.png"
import nftcard15 from "../public/nft cards/Image Placeholder-15.png"
import nftcard16 from "../public/nft cards/Image Placeholder-16.png"
import nftcard17 from "../public/nft cards/Image Placeholder-17.png"
import nftcard18 from "../public/nft cards/Image Placeholder-18.png"
import nftcard19 from "../public/nft cards/Image Placeholder-19.png"
import nftcard20 from "../public/nft cards/Image Placeholder-20.png"

function MarketplaceHeroSec() {
  return (
    <section>
        <div className="mt-[40px] md:mt-[60px] lg:mt-[80px]">
          <div className="my-[40px] mx-[30px] md:mx-[77px] lg:mx-[115px] md:my-[60px] lg:my-[80px]">
            <h1 className="capitalize text-[28px] md:text-[38px] lg:text-[50px] font-semibold leading-[40px] md:leading-[46px] lg:leading-[56px] mb-[10px]">Browse Marketplace</h1>
            <p className="capitalize text-[16px] lg:text-[22px] leading-[22px] lg:leading-[35px] mb-[30px]">Browse through more than 50k NFTs on the NFT Marketplace.</p>
            <div className="flex items-center justify-between border-2 border-[#3b3b3b] rounded-[20px] p-5">
              <input type="text" placeholder="Search your favroit NFTs" className="bg-transparent outline-none" />
              <MagnifyingGlassIcon className="h-6 w-6 inline-block" />
            </div>
          </div>
          <hr className="border-none h-0.5 bg-[#3B3B3B]" />
          {/* Navigation Section */}
          <div className="flex items-center justify-center gap-10 mt-[10px]">
            <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[31px] font-semibold px-[60px] py-[20px] md:px-[118px] md:py-[20px] lg:px-[202px] lg:py-[15px] border-b-2 border-[#858584]">NFTs<span className="hidden md:inline-block font-SpaceMono text-[12px] font-normal leading-[13px] lg:text-[16px] lg:leading-[22px] bg-[#858584] px-[10px] py-[5px] rounded-[20px] ml-4">302</span></p>
            <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[31px] font-semibold px-[60px] py-[20px] md:px-[118px] md:py-[20px] lg:px-[202px] lg:py-[15px] text-[#858584]">Collections<span className="hidden md:inline-block font-SpaceMono text-[12px] font-normal leading-[13px] lg:text-[16px] lg:leading-[22px] text-white bg-[#858584] px-[10px] py-[5px] rounded-[20px] ml-4">67</span></p>
          </div>
          {/* Card Section */}
          <div className="flex items-center justify-center px-[30px] py-[40px] lg:py-[80px] bg-[#3B3B3B]">
            <div className="md:hidden flex flex-col gap-[30px]">
              <NFTCard nft={nftcard8} nftname='Colorful Dog 0344' avatar={avatar8} artist='RustyRobot' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard9} nftname='Distant Galaxy' avatar={avatar9} artist='Keepiteal' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard10} nftname='AstroFiction' avatar={avatar10} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard11} nftname='CryptoCity' avatar={avatar11} artist='DigiLab' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard13} nftname='Sunset Dimension' avatar={avatar12} artist='GravityOne' bgcolor={"bg-[#2B2B2B]"} />
            </div>
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-[30px]">
              <NFTCard nft={nftcard8} nftname='Colorful Dog 0344' avatar={avatar8} artist='RustyRobot' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard9} nftname='Distant Galaxy' avatar={avatar9} artist='Keepiteal' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard10} nftname='AstroFiction' avatar={avatar10} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard11} nftname='CryptoCity' avatar={avatar11} artist='DigiLab' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard13} nftname='Sunset Dimension' avatar={avatar12} artist='GravityOne' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard14} nftname='Space Travel' avatar={avatar13} artist='Juanie' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard15} nftname='Cherry Blossom Girl 035' avatar={avatar14} artist='Robotica' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard16} nftname='Colorful Dog 0356' avatar={avatar15} artist='Shroomie' bgcolor={"bg-[#2B2B2B]"} />
            </div>
            <div className="hidden lg:grid grid-cols-3 gap-[30px]">
              <NFTCard nft={nftcard8} nftname='Colorful Dog 0344' avatar={avatar8} artist='RustyRobot' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard9} nftname='Distant Galaxy' avatar={avatar9} artist='Keepiteal' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard10} nftname='AstroFiction' avatar={avatar10} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard11} nftname='CryptoCity' avatar={avatar11} artist='DigiLab' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard13} nftname='Sunset Dimension' avatar={avatar12} artist='GravityOne' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard14} nftname='Space Travel' avatar={avatar13} artist='Juanie' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard15} nftname='Cherry Blossom Girl 035' avatar={avatar14} artist='Robotica' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard16} nftname='Colorful Dog 0356' avatar={avatar15} artist='Shroomie' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard17} nftname='Designer Bear' avatar={avatar16} artist='Ghiblier' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard18} nftname='Happy Robot 024' avatar={avatar17} artist='Dotsu' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard19} nftname='Happy Robot 032' avatar={avatar18} artist='Mr Fox' bgcolor={"bg-[#2B2B2B]"} />
              <NFTCard nft={nftcard20} nftname='Magic Mushroom' avatar={avatar19} artist='BlueWhale' bgcolor={"bg-[#2B2B2B]"} />
            </div>
          </div>
          <hr className="border-none h-0.5 bg-[#2b2b2b]"/>
        </div>
    </section>
  )
}

export default MarketplaceHeroSec