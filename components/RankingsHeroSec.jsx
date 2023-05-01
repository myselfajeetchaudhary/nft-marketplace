import Image from "next/image"
import avatar0 from "../public/avatars/Avatar Placeholder.png"
import avatar1 from "../public/avatars/Avatar Placeholder-1.png"
import avatar2 from "../public/avatars/Avatar Placeholder-2.png"
import avatar3 from "../public/avatars/Avatar Placeholder-3.png"
import avatar4 from "../public/avatars/Avatar Placeholder-4.png"
import avatar5 from "../public/avatars/Avatar Placeholder-5.png"
import avatar6 from "../public/avatars/Avatar Placeholder-6.png"
import avatar7 from "../public/avatars/Avatar Placeholder-7.png"
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
import RankingsCard from "./RankingsCard"

function RankingsHeroSec() {
  return (
    <section>
        <div className="">
          <div className="flex flex-col items-center md:items-start">
            <div className="my-[30px] mx-[30px] md:mx-[77px] lg:mx-[115px] md:my-[60px] lg:my-[80px]">
              <h1 className="capitalize text-[28px] md:text-[38px] lg:text-[50px] font-semibold leading-[40px] md:leading-[46px] lg:leading-[56px] mb-[10px]">Top Creators</h1>
              <p className="capitalize text-[16px] lg:text-[22px] leading-[22px] lg:leading-[35px]">Check out top ranking NFT artists on the NFT Marketplace.</p>
            </div>
          </div>
          
          {/* Navigation Menu */}
          {/* Small Screens */}
          <div className="md:hidden flex items-center justify-center mx-[30px]">
            <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[31px] font-semibold px-[30px] py-[20px] border-b-2 border-[#858584]">1d</p>
            <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[31px] font-semibold px-[30px] py-[20px] text-[#858584]">7d</p>
            <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[31px] font-semibold px-[25px] py-[20px] text-[#858584]">30d</p>
            <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[31px] font-semibold px-[7px] py-[20px] text-[#858584]">All Time</p>
          </div>

          {/* After medium screens */}
          <div className="hidden md:flex items-center justify-around mx-[77px] whitespace-nowrap">
            <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[31px] font-semibold px-[62px] py-[20px] lg:px-[97px] lg:py-[15px] border-b-2 border-[#858584]">Today</p>
            <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[31px] font-semibold px-[44px] py-[20px] lg:px-[97px] lg:py-[15px] text-[#858584]">This Week</p>
            <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[31px] font-semibold px-[40px] py-[20px] lg:px-[97px] lg:py-[15px] text-[#858584]">This Month</p>
            <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[31px] font-semibold px-[52px] py-[20px] lg:px-[97px] lg:py-[15px] text-[#858584]">All Time</p>
          </div>

          {/* Rankings Card */}
          <div className="flex flex-col items-center gap-5 mx-[30px] my-[40px] md:mx-[72px] lg:mx-[115px]">
            <div className="flex items-center w-[315px] h-[46px] md:w-[690px] lg:w-[1050px] lg:h-[60px] rounded-[20px] border border-[#3B3B3B]">
              <div className="flex items-center md:gap-[20px] lg:gap-[60px] mx-[10px] md:mx-[20px] text-[#858584] text-[12px] leading-[13px] md:text-[16px] md:leading-[22px] font-SpaceMono">
              {/* 1st Col */}
                <div className="flex items-center gap-[10px] md:gap-[20px] w-[200px] h-[24px] md:w-[410px] md:h-[31px] lg:w-[430px] lg:h-[60px]">
                    <p className="flex items-center justify-center w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]">#</p>
                    <p>Artist</p>
                </div>
                {/* 2nd Col */}
                <div className="flex items-center md:gap-[20px] w-[80px] h-[13px] md:w-[220px] md:h-[22px] lg:w-[520px]">
                    <p className="hidden md:inline-block md:w-[100px] lg:w-[160px]">Change</p>
                    <p className="hidden lg:inline-block lg:w-[160px]">NFTs Sold</p>
                    <p className="md:w-[100px] lg:w-[160px]">Volume</p>
                </div>
              </div>
            </div>
            <RankingsCard num={1} avatar={avatar0} artist="Zain Dokidis" />
            <RankingsCard num={2} avatar={avatar1} artist="Ruben Vetrovs" />
            <RankingsCard num={3} avatar={avatar2} artist="Maren Franci" />
            <RankingsCard num={4} avatar={avatar3} artist="Emerson Carder" />
            <RankingsCard num={5} avatar={avatar4} artist="Zain Botosh" />
            <RankingsCard num={6} avatar={avatar5} artist="Talan Korsgaard" />
            <RankingsCard num={7} avatar={avatar6} artist="Haylie Dias" />
            <RankingsCard num={8} avatar={avatar7} artist="James Donin" />
            <RankingsCard num={9} avatar={avatar8} artist="Erin Siphron" />
            <RankingsCard num={10} avatar={avatar9} artist="Cristofer Levin" />
            <RankingsCard num={11} avatar={avatar10} artist="Alena Schleifer" />
            <RankingsCard num={12} avatar={avatar11} artist="Dulce Vetrovs" />
            <RankingsCard num={13} avatar={avatar12} artist="Nolan Siphron" />
            <RankingsCard num={14} avatar={avatar13} artist="Omar Stanton" />
            <RankingsCard num={15} avatar={avatar14} artist="Omar Lipshutz" />
            <RankingsCard num={16} avatar={avatar15} artist="Terry Donin" />
            <RankingsCard num={17} avatar={avatar16} artist="Erin Botosh" />
            <RankingsCard num={18} avatar={avatar17} artist="Cheyenne Rhiel" />
            <RankingsCard num={19} avatar={avatar18} artist="Jaxson Vaccaro" />
            <RankingsCard num={20} avatar={avatar19} artist="Jordyn Dias" />
          </div>
        </div>
    </section>
  )
}

export default RankingsHeroSec