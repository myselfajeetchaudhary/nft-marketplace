import Image from "next/image"
import highlightedNFT from "../public/highlighted NFT.png"
import avatar13 from "../public/avatars/Avatar Placeholder-13.png"
import { RocketLaunchIcon } from '@heroicons/react/24/outline'
import Link from "next/link"

function Hero() {
  return (
    <section className="flex justify-center">
        <div className="flex flex-col md:flex-row items-start justify-center my-10 md:my-20 gap-8">
            {/* Text Section */}
            <div className="flex-1 w-[315px] md:w-[330px] lg:w-[510px] h-auto">
                <h1 className="capitalize text-[28px] md:text-[38px] lg:text-[67px] font-semibold leading-[39px] md:leading-[46px] lg:leading-[74px]">Discover Digital Art & Collect NFTs</h1>
                <p className="capitalize text-[16px] lg:text-[22px] md:leading-[22px] lg:leading-[35px] my-7">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                {/* Image Section */}
                <Link href="/artist">
                    <div className="md:hidden w-[315px] h-[315px]">
                        <Image src={highlightedNFT} className="block" />
                        <div className="w-[315px] h-auto bg-[#3B3B3B] rounded-b-[20px]">
                            <div className="px-[20px] py-[22px]">
                                <p className="text-[22px] font-semibold mb-[10px]">Space Walking</p>
                                <p><Image src={avatar13} width={24} height={24} className="inline-block mr-3" /><span className="text-[16px]">Animakid</span></p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/createaccount">
                    <button className="button w-[315px] md:w-auto mt-20 md:mt-0 px-12 py-4 bg-[#A259FF]"><RocketLaunchIcon className='icon' />Get Started</button>  
                </Link>
                <div className="flex items-center space-x-8 mt-7">
                    <div className="flex-1">
                        <span className="font-SpaceMono md:text-[22px] lg:text-[28px] font-bold">240k+</span>
                        <p className="md:text-[16px] lg:text-[24px]">Total Sale</p>
                    </div>
                    <div className="flex-1">
                        <span className="font-SpaceMono md:text-[22px] lg:text-[28px] font-bold">100k+</span>
                        <p className="md:text-[16px] lg:text-[24px]">Auctions</p>
                    </div>
                    <div className="flex-1">
                        <span className="font-SpaceMono md:text-[22px] lg:text-[28px] font-bold">220k+</span>
                        <p className="md:text-[16px] lg:text-[24px]">Artists</p>
                    </div>
                </div>
            </div>
            {/* Image Section */}
            <Link href="/artist">
                <div className="hidden md:block flex-1 md:w-[330px] md:h-[330px] lg:w-[510px] lg:h-[510px]">
                    <Image src={highlightedNFT} />
                    <div className="md:w-[330px] lg:w-[510px] h-[109px] bg-[#3B3B3B] rounded-b-[20px]">
                        <div className="px-[20px] py-[22px]">
                            <p className="text-[22px] font-semibold mb-[10px]">Space Walking</p>
                            <p><Image src={avatar13} width={24} height={24} className="inline-block mr-3" /><span className="text-[16px]">Animakid</span></p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </section>
  )
}

export default Hero