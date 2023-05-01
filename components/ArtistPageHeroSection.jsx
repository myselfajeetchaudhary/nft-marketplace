import { DocumentDuplicateIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import animakid from "../public/Avatar.png"
import globe from "../public/social icons/Globe.png"
import discord from "../public/social icons/DiscordLogo.png"
import youtube from "../public/social icons/YoutubeLogo.png"
import twitter from "../public/social icons/TwitterLogo.png"
import instagram from "../public/social icons/InstagramLogo.png"
import nftcard1 from "../public/nft cards/Image Placeholder.png"
import nftcard2 from "../public/nft cards/Image.png"
import nftcard3 from "../public/nft cards/Image Placeholder-1.png"
import nftcard4 from "../public/nft cards/Image Placeholder-2.png"
import nftcard5 from "../public/nft cards/Image Placeholder-3.png"
import nftcard6 from "../public/nft cards/Image Placeholder-4.png"
import nftcard7 from "../public/nft cards/Image Placeholder-5.png"
import nftcard8 from "../public/nft cards/Image Placeholder-6.png"
import nftcard9 from "../public/nft cards/Image Placeholder-7.png"
import avatar13 from "../public/avatars/Avatar Placeholder-13.png"
import NFTCard from "./NFTCard"

function ArtistPageHeroSection() {
  return (
    <>
    {/* Hero Section */}
    <section>
      {/* Banner + Image */}
      <div>
        <div className="relative bg-no-repeat bg-center bg-cover bg-[url('../public/artistpage-bg.svg')] w-auto h-[250px] md:h-[280px] lg:h-[320px]">
          <div className="absolute bottom-0 bg-gradient-to-t from-[#A259FF] w-full h-3/4"></div>
        </div>
        <Image src={animakid} className="relative -my-[70px] mx-auto md:mx-[72px] lg:mx-[115px] transform duration-300 hover:scale-95" />
      </div>
      {/* Content Part */}
      <div className="flex items-center justify-center md:justify-start mx-[30px] md:mx-[72px] lg:mx-[115px] mt-[80px] mb-[30px]">
        <div className="flex flex-col md:items-start gap-[30px]">
          {/* Artist Name + Buttons */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-[30px] lg:gap-[600px]">
            <p className="text-[28px] font-semibold leading-[40px] text-center md:text-left">AnimaKid</p>
            <div className="flex flex-col md:flex-row gap-5">
              <button className="transform duration-300 hover:scale-95 px-[85px] py-[20px] md:px-[30px] md:py-[20px] rounded-[20px] bg-[#A259FF] font-semibold text-[16px] leading-[22px]"><DocumentDuplicateIcon className='icon' />0xc0E3...B79C</button>
              <button className="transform duration-300 hover:scale-95 px-[85px] py-[20px] md:px-[30px] md:py-[20px] rounded-[20px] border-2 border-[#A259FF] font-semibold text-[16px] leading-[22px]"><span className="text-[20px] text-center mr-3">+</span>Follow</button>
            </div>
          </div>
          {/* Content */}
          <div className="flex gap-12 md:gap-28">
            <div>
              <span className="text-[22px] leading-[35px] lg:text-[28px] lg:leading-[40px] font-bold font-SpaceMono">250k+</span>
              <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[35px]">Volume</p>
            </div>
            <div>
              <span className="text-[22px] lg:text-[28px] lg:leading-[40px] leading-[35px] font-bold font-SpaceMono">50k+</span>
              <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[35px]">NFTs Sold</p>
            </div><div>
              <span className="text-[22px] lg:text-[28px] lg:leading-[40px] leading-[35px] font-bold font-SpaceMono">3000+</span>
              <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[35px]">Followers</p>
            </div>
          </div>
          <div>
            <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[35px] font-SpaceMono mb-[10px] text-[#858584]">Bio</p>
            <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[35px] capitalize">The internet's friendliest designer kid.</p>
          </div>
          <div>
            <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[35px] font-SpaceMono mb-[10px] text-[#858584]">Bio</p>
            <div className="flex gap-[10px]">
              <Image src={globe} className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
              <Image src={discord} className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
              <Image src={youtube} className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
              <Image src={twitter} className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
              <Image src={instagram} className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-[#3B3B3B] border-none h-0.5" />

      {/* Navigation Section */}
      <div className="flex items-center justify-center gap-10 mt-[10px]">
        <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[31px] font-semibold p-5 md:px-[50px] md:py-[20px] lg:px-[97px] lg:py-[15px] border-b-2 border-[#858584]">Created<span className="hidden md:inline-block font-SpaceMono text-[12px] font-normal leading-[13px] lg:text-[16px] lg:leading-[22px] bg-[#858584] px-[10px] py-[5px] rounded-[20px] ml-4">302</span></p>
        <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[31px] font-semibold p-5 md:px-[50px] md:py-[20px] lg:px-[97px] lg:py-[15px] text-[#858584]">Owned<span className="hidden md:inline-block font-SpaceMono text-[12px] font-normal leading-[13px] lg:text-[16px] lg:leading-[22px] text-white bg-[#858584] px-[10px] py-[5px] rounded-[20px] ml-4">67</span></p>
        <p className="text-[16px] leading-[22px] lg:text-[22px] lg:leading-[31px] font-semibold p-5 md:px-[50px] md:py-[20px] lg:px-[97px] lg:py-[15px] text-[#858584]">Collection<span className="hidden md:inline-block font-SpaceMono text-[12px] font-normal leading-[13px] lg:text-[16px] lg:leading-[22px] text-white bg-[#858584] px-[10px] py-[5px] rounded-[20px] ml-4">4</span></p>
      </div>
    </section>
    {/* Card Section */}
    <section className="flex items-center justify-center bg-[#3B3B3B]">
      <div className="px-[30px] py-[80px]">
        <div className="md:hidden flex flex-col gap-[30px]">
          <NFTCard nft={nftcard1} nftname='Life On Edena' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
          <NFTCard nft={nftcard2} nftname='Distant Galaxy' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
          <NFTCard nft={nftcard3} nftname='AstroFiction' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
        </div>
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-[30px]">
          <NFTCard nft={nftcard1} nftname='Life On Edena' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
          <NFTCard nft={nftcard2} nftname='Distant Galaxy' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
          <NFTCard nft={nftcard3} nftname='AstroFiction' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
          <NFTCard nft={nftcard4} nftname='AstroFiction' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
          <NFTCard nft={nftcard5} nftname='AstroFiction' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
          <NFTCard nft={nftcard6} nftname='AstroFiction' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-[30px]">
          <NFTCard nft={nftcard1} nftname='Life On Edena' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
          <NFTCard nft={nftcard2} nftname='Distant Galaxy' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
          <NFTCard nft={nftcard3} nftname='AstroFiction' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
          <NFTCard nft={nftcard4} nftname='CryptoCity' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
          <NFTCard nft={nftcard5} nftname='ColorfulDog 0524' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
          <NFTCard nft={nftcard6} nftname='Space Tales' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
          <NFTCard nft={nftcard7} nftname='Cherry Blossom Girl' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
          <NFTCard nft={nftcard8} nftname='Dancing Robot 0987' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
          <NFTCard nft={nftcard9} nftname='IceCream Ape' avatar={avatar13} artist='AnimaKid' bgcolor={"bg-[#2B2B2B]"} />
        </div>
      </div>
    </section>
    <hr className="h-0.5 border-none bg-[#2B2B2B]" />
    </>
  )
}

export default ArtistPageHeroSection