import Image from "next/image"
import storefrontLogo from "../public/storefront.svg"
import discord from "../public/social icons/DiscordLogo.png"
import youtube from "../public/social icons/YoutubeLogo.png"
import twitter from "../public/social icons/TwitterLogo.png"
import instagram from "../public/social icons/InstagramLogo.png"

function Footer() {
  return (
    <footer className="flex items-center justify-center md:justify-start lg:justify-center bg-[#3B3B3B]">
        <div className="my-[40px] mx-[30px] md:mx-[72px] lg:mx-[115px]">
            {/* Part A */}
            <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
                {/* Part A1 */}
                <div className="w-[328px] h-auto">
                    <div className="flex items-center space-x-3 mb-[30px]">
                        <Image src={storefrontLogo} height={36} alt="NFT Marketplace Logo" />
                        <span className="text-[20px] font-SpaceMono font-semibold tracking-widest whitespace-nowrap">NFT Marketplace</span>
                    </div>
                    <p className="text-[#CCCCCC] mb-[20px]">NFT marketplace UI created with Anima for Figma.</p>
                    <p className="text-[#CCCCCC] mb-[15px]">Join our community</p>
                    <div className="flex gap-[10px]">
                        <Image src={discord} className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
                        <Image src={youtube} className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
                        <Image src={twitter} className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
                        <Image src={instagram} className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
                    </div>
                </div>
                 {/* Part A2 */}
                <div className="w-[240px] h-auto">
                    <p className="text-[20px] font-SpaceMono font-semibold tracking-widest whitespace-nowrap mb-[25px]">Explore</p>
                    <p className="text-[#CCCCCC] mb-[20px]">Marketplace</p>
                    <p className="text-[#CCCCCC] mb-[20px]">Rankings</p>
                    <p className="text-[#CCCCCC] mb-[20px]">Connect a wallet</p>
                </div>
                {/* Part A3 */}
                <div className="flex flex-col items-start w-[420px] h-auto">
                    <p className="text-[20px] font-SpaceMono font-semibold tracking-widest whitespace-nowrap capitalize mb-[25px]">Join our weekly digest</p>
                    <p className="text-[#CCCCCC] mb-[20px]">Get exclusive promotions & updates straight to your inbox.</p>
                    <form>
                        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-0 mb-[15px]">
                            <input type="email" required placeholder="Enter your email here" className="px-5 py-3 md:py-4 h-auto w-[315px] md:w-[420px] bg-white rounded-[20px] outline-none text-black" />
                            <button className="outline-none text-white font-semibold md:-ml-[180px] px-10 py-3 md:py-4 h-auto w-[315px] md:w-[180px] rounded-[20px] bg-[#A259FF] transform duration-300 hover:scale-95">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <hr className="border-none h-[1px] bg-[#858584]" />
            {/* Part B */}
            <div className="mt-[20px]">
                <p className="text-[#CCCCCC] text-[12px] leading-[13px]">Ⓒ NFT Market. Use this template freely.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer