import nftcard1 from "../public/nft cards/Image.png"
import nftcard2 from "../public/nft cards/Image Placeholder.png"
import nftcard3 from "../public/nft cards/Image Placeholder-1.png"
import avatar9 from "../public/avatars/Avatar Placeholder-9.png"
import avatar14 from "../public/avatars/Avatar Placeholder-14.png"
import avatar15 from "../public/avatars/Avatar Placeholder-15.png"
import NFTCard from "./NFTCard"
import { EyeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

function DiscoverNFTs() {
  return (
    <section className="flex items-center justify-center">
        <div className="my-[40px] lg:my-[80px]">
          <div className="flex items-center justify-between mb-[40px] lg:mb-[60px]">
            <div className="w-[315px] md:w-[340px] lg:w-auto h-auto">
              <h2 className="capitalize font-semibold text-[28px] lg:text-[38px] leading-[39px] lg:leading-[46px] mb-[10px]">Discover More NFTs</h2>
              <p className="capitalize text-[16px] lg:text-[22px] leading-[22px] lg:leading-[35px]">Explore new trending NFTs</p>
            </div>
            <Link href="/marketplace">
              <button className="button hidden md:block w-[315px] md:w-auto px-12 py-4"><EyeIcon className='icon text-[#A259FF]' />See All</button>  
            </Link>
          </div>
          {/* Discover Cards */}
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px]">
              <NFTCard nft={nftcard2} nftname='Life On Edena' avatar={avatar9} artist='MoonDancer' bgcolor={"bg-[#3B3B3B]"} />
              <NFTCard nft={nftcard1} nftname='Distant Galaxy' avatar={avatar14} artist='NebulaKid' bgcolor={"bg-[#3B3B3B]"} />
              <div className="md:hidden lg:block">
                <NFTCard nft={nftcard3} nftname='AstroFiction' avatar={avatar15} artist='SpaceOne' bgcolor={"bg-[#3B3B3B]"} />
              </div>
          </div>
          <button className="button md:hidden mt-10 w-[315px] md:w-auto px-12 py-4"><EyeIcon className='icon text-[#A259FF]' />See All</button>  
        </div>
    </section>
  )
}

export default DiscoverNFTs