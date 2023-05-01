import Image from "next/image"
import Link from "next/link"

function ArtistCard({ artist, artistname, num }) {
  return (
    <Link href="/artist">
      <div className="relative transform duration-300 hover:scale-95 flex flex-row lg:flex-col items-center h-[100px] w-[315px] md:h-[100px] md:w-[330px] lg:h-[238px] lg:w-[240px] bg-[#3b3b3b] rounded-[20px] p-5 gap-5">
          <Image src={artist} className="w-[60px] h-[60px] lg:w-[120px] lg:h-[120px]" />
          <div className="lg:text-center">
              <p className="text-[22px] leading-[31px] font-semibold mb-[5px]">{artistname}</p>
              <p className="text-[16px] leading-[22px]"><span className="text-[#858584] mr-[10px]">Total Sales:</span><span className="font-SpaceMono">34.53 ETH</span></p>
          </div>
          <div className="absolute top-[12px] left-[12px] lg:top-[18px] lg:left-[20px] h-[30px] w-[30px] bg-[#2B2B2B] rounded-[20px] flex items-center justify-center text-[#858584] font-SpaceMono">{num}</div>
      </div>
    </Link>
  )
}

export default ArtistCard