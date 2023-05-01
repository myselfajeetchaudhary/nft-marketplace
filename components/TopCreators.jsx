import Image from "next/image"
import ArtistCard from "./ArtistCard"
import artistAvatar1 from "../public/top creators/Artist Avatar.png"
import artistAvatar2 from "../public/top creators/Avatar Placeholder.png"
import artistAvatar3 from "../public/top creators/Avatar Placeholder-1.png"
import artistAvatar4 from "../public/top creators/Avatar Placeholder-2.png"
import artistAvatar5 from "../public/top creators/Avatar Placeholder-3.png"
import artistAvatar6 from "../public/top creators/Avatar Placeholder-4.png"
import artistAvatar7 from "../public/top creators/Avatar Placeholder-5.png"
import artistAvatar8 from "../public/top creators/Avatar Placeholder-6.png"
import artistAvatar9 from "../public/top creators/Avatar Placeholder-7.png"
import artistAvatar10 from "../public/top creators/Avatar Placeholder-8.png"
import artistAvatar11 from "../public/top creators/Avatar Placeholder-9.png"
import artistAvatar12 from "../public/top creators/Avatar Placeholder-10.png"
import { RocketLaunchIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

function TopCreators() {
  return (
    <section className="flex items-center justify-center">
        <div className="my-[40px] lg:my-[80px]">
            <div className="flex items-center justify-between mb-[40px] lg:mb-[60px]">
              <div className="w-[315px] md:w-[340px] lg:w-auto h-auto">
                  <h2 className="capitalize font-semibold text-[28px] lg:text-[38px] leading-[39px] lg:leading-[46px] mb-[10px]">Top Creators</h2>
                  <p className="capitalize text-[16px] lg:text-[22px] leading-[22px] lg:leading-[35px]">Checkout Top Rated Creators on the NFT Marketplace</p>
              </div>
              <Link href="/rankings">
                <button className="button hidden md:block w-[315px] md:w-auto px-12 py-4"><RocketLaunchIcon className='icon text-[#A259FF]' />View Rankings</button>  
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[30px]">
                {/* Artist Card */}
                <ArtistCard artist={artistAvatar1} artistname="Keepitreal" num="1" />
                <ArtistCard artist={artistAvatar2} artistname="DigiLab" num="2" />
                <ArtistCard artist={artistAvatar3} artistname="GravityOne" num="3" />
                <ArtistCard artist={artistAvatar4} artistname="Juanie" num="4" />
                <ArtistCard artist={artistAvatar5} artistname="BlueWhale" num="5" />
                <div className="hidden md:block">
                  <ArtistCard artist={artistAvatar6} artistname="Mr Fox" num="6" />
                </div>
                <div className="hidden lg:block">
                  <ArtistCard artist={artistAvatar7} artistname="Shroomie" num="7" />
                </div>
                <div className="hidden lg:block">
                  <ArtistCard artist={artistAvatar8} artistname="Robotica" num="8" />
                </div>
                <div className="hidden lg:block">
                  <ArtistCard artist={artistAvatar9} artistname="RustyRobot" num="9" />
                </div>
                <div className="hidden lg:block">
                  <ArtistCard artist={artistAvatar10} artistname="Animakid" num="10" />
                </div>
                <div className="hidden lg:block">
                  <ArtistCard artist={artistAvatar11} artistname="Dotgu" num="11" />
                </div>
                <div className="hidden lg:block">
                  <ArtistCard artist={artistAvatar12} artistname="Ghiblier" num="12" />
                </div>
            </div>
            <button className="button md:hidden mt-10 w-[315px] md:w-auto px-12 py-4"><RocketLaunchIcon className='icon text-[#A259FF]' />View Rankings</button>  
        </div>
    </section>
  )
}

export default TopCreators