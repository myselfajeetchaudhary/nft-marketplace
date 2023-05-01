import Image from "next/image"
import art from "../public/nft marketplace/Category Icon.png"
import collectibles from "../public/nft marketplace/Photo & Icon.png"
import music from "../public/nft marketplace/Category Icon-1.png"
import photography from "../public/nft marketplace/Category Icon-2.png"
import video from "../public/nft marketplace/Category Icon-3.png"
import utility from "../public/nft marketplace/Category Icon-4.png"
import sport from "../public/nft marketplace/Category Icon-5.png"
import virtualworld from "../public/nft marketplace/Category Icon-6.png"
import CategoryCard from "./CategoryCard"

function BrowseCategories() {
  return (
    <section className="flex items-center justify-center">
        <div className="my-[40px] lg:my-[80px]">
            <div>
                <h2 className="capitalize font-semibold text-[28px] leading-[39px] lg:text-[38px] lg:leading-[46px] mb-[60px]">Browse Categories</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-[30px]">
                <CategoryCard category={art} categoryname="Art" />
                <CategoryCard category={collectibles} categoryname="Collectibles" />
                <CategoryCard category={music} categoryname="Music" />
                <CategoryCard category={photography} categoryname="Photography" />
                <CategoryCard category={video} categoryname="Video" />
                <CategoryCard category={utility} categoryname="Utility" />
                <CategoryCard category={sport} categoryname="Sport" />
                <CategoryCard category={virtualworld} categoryname="V-World" />
            </div>
        </div>
    </section>
  )
}

export default BrowseCategories