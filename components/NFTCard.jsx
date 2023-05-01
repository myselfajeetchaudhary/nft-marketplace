import Image from "next/image"
import Link from "next/link"

function NFTCard({ nft, nftname, avatar, artist, bgcolor }) {
  return (
    <Link href="/artist">
        <div className="transform duration-300 hover:scale-95">
            <Image src={nft} className='block w-[315px] h-auto md:w-[330px] md:h-[295px]' />
            <div className={`w-[315px] h-[164px] md:w-[330px] md:h-[173px] ${bgcolor} rounded-b-[20px]`}>
                <div className="py-[20px] px-[30px]">
                    <p className="text-[22px] leading-[30px] font-semibold mb-[5px]">{nftname}</p>
                    <p><Image src={avatar} width={24} height={24} className="inline-block mr-3" /><span className="text-[16px] leading-[22px] font-SpaceMono">{artist}</span></p>
                </div>
                <div className="flex justify-between mt-[5px] mb-[25px] mx-[30px]">
                    <div>
                        <p className="text-[#858584] mb-2 font-SpaceMono text-[12px] leading-[13px]">Price</p>
                        <p className="font-SpaceMono leading-[22px]">1.63 ETH</p>
                    </div>
                    <div>
                        <p className="text-[#858584] mb-2 font-SpaceMono text-[12px] leading-[13px]">Highest Bid</p>
                        <p className="font-SpaceMono leading-[22px]">0.33 wETH</p>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default NFTCard