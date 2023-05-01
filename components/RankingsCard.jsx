import Image from "next/image"

function RankingsCard({ num, avatar, artist }) {
  return (
    <div className="flex items-center w-[315px] h-[50px] md:w-[690px] md:h-[60px] lg:w-[1050px] lg:h-[84px] rounded-[20px] bg-[#3B3B3B]">
        <div className="flex items-center md:gap-[20px] lg:gap-[60px] mx-[10px] md:mx-[20px]">
        {/* 1st Col */}
        <div className="flex items-center gap-[10px] md:gap-[20px] w-[200px] h-[24px] md:w-[410px] md:h-[31px] lg:w-[430px] lg:h-[60px]">
          <p className="flex items-center justify-center w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] rounded-[20px] lg:bg-[#2B2B2B] text-[#858584] text-[12px] leading-[13px] md:text-[16px] md:leading-[22px] font-SpaceMono">{num}</p>
          <div className="flex items-center gap-3 lg:gap-5 transform duration-300 hover:scale-95">
            <Image src={avatar} className="w-[24px] h-[24px] lg:w-[60px] lg:h-[60px]" />
            <p className="text-[16px] leading-[22px] md:text-[22px] md:leading-[31px] md:font-semibold whitespace-nowrap">{artist}</p>
          </div>
        </div>
        {/* 2nd Col */}
        <div className="flex items-center md:gap-[20px] w-[80px] h-[13px] md:w-[220px] md:h-[22px] lg:w-[520px] text-[12px] leading-[13px] md:text-[16px] md:leading-[22px] font-SpaceMono">
          <p className="hidden md:inline-block text-[#00AC4F] md:w-[100px] lg:w-[160px]">+1.41%</p>
          <p className="hidden lg:inline-block lg:w-[160px]">602</p>
          <p className="md:w-[100px] lg:w-[160px]">12.4 ETH</p>
        </div>
        </div>
    </div>
  )
}

export default RankingsCard