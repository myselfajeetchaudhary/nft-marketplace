import Image from "next/image"
import TrendingCard from "./TrendingCard"
import primaryPhoto from "../public/Primary Photo Placeholder.png"
import primaryPhoto3 from "../public/Secondary Photo Placeholder-1.png"
import primaryPhoto2 from "../public/Secondary Photo Placeholder.png"
import secondaryPhoto from "../public/Primary Photo Placeholder-1.png"
import secondaryPhoto2 from "../public/Secondary Photo Placeholder-2.png"
import secondaryPhoto3 from "../public/Secondary Photo Placeholder-3.png"
import terceryPhoto from "../public/Primary Photo Placeholder-2.png"
import terceryPhoto2 from "../public/Secondary Photo Placeholder-4.png"
import terceryPhoto3 from "../public/Secondary Photo Placeholder-5.png"
import avatar5 from "../public/avatars/Avatar Placeholder-5.png"
import avatar6 from "../public/avatars/Avatar Placeholder-6.png"
import avatar11 from "../public/avatars/Avatar Placeholder-11.png"

function TrendingCollection() {
  return (
    <section className="flex items-center justify-center">
        <div className="my-[40px] lg:my-[80px]">
            <div className="w-[315px] h-auto md:w-auto">
                <h2 className="capitalize font-semibold text-[28px] lg:text-[38px] leading-[39px] lg:leading-[46px] mb-[10px]">Trending Collection</h2>
                <p className="capitalize text-[16px] lg:text-[22px] leading-[22px] lg:leading-[35px] mb-[40px] lg:mb-[60px]">Checkout our weekly updated trending collection.</p>
            </div>
            {/* Trending Card */}
            <div className="flex items-center gap-[30px]">
              <div>
                <TrendingCard pic_1={primaryPhoto} pic_2={primaryPhoto2} pic_3={primaryPhoto3} avatar={avatar5} text_1='DSGN Animals' text_2='MrFox' />
              </div>
              <div className="hidden md:block">
                <TrendingCard pic_1={secondaryPhoto} pic_2={secondaryPhoto2} pic_3={secondaryPhoto3} avatar={avatar6} text_1='Magic Mushrooms' text_2='Shroomie' />
              </div>
              <div className="hidden lg:block">
                <TrendingCard pic_1={terceryPhoto} pic_2={terceryPhoto2} pic_3={terceryPhoto3} avatar={avatar11} text_1='Disco Machines' text_2='BeKind2Robots' />
              </div>
            </div>
        </div>
    </section>
  )
}

export default TrendingCollection