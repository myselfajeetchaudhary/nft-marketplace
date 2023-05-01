import Image from "next/image"
import Link from "next/link"

function CategoryCard({ category, categoryname }) {
  return (
    <Link href="/marketplace">
    <div className="transform duration-300 hover:scale-95 w-[150px] h-[210px] lg:w-[240px] lg:h-[316px]">
        <Image src={category} />
        <div className="w-[150px] h-auto lg:w-[240px] lg:h-[76px] bg-[#3B3B3B] px-[30px] pt-[20px] pb-[25px] rounded-b-[20px] text-[16px] leading-[22px] lg:text-[22px] lg:leading-[30px] font-semibold text-left">{categoryname}</div>
    </div>
    </Link>
  )
}

export default CategoryCard