import Image from "next/image"
import Link from "next/link"

function TrendingCard({ pic_1, pic_2, pic_3, avatar, text_1, text_2 }) {
  return (
    <div className="flex flex-col items-start gap-[15px]">
      <Link href="/artist">
        <Image src={pic_1} className="transform duration-300 hover:scale-95" />
      </Link>
        <div className="flex items-center gap-[15px]">
          <Link href="/artist">
            <Image src={pic_2} className="transform duration-300 hover:scale-95" />
          </Link>
          <Link href="/artist">
            <Image src={pic_3} className="transform duration-300 hover:scale-95" />
          </Link>
          <Link href="/artist">
            <div className="h-[100px] w-[100px] bg-[#A259FF] font-SpaceMono text-[22px] font-bold flex items-center justify-center rounded-[20px] transform duration-300 hover:scale-95">1025</div>
          </Link>
        </div>
        <div>
            <p className="text-[22px] leading-[31px] font-semibold mb-[10px]">{text_1}</p>
            <p><Link href="/artist"><Image src={avatar} width={24} height={24} className="inline-block mr-3" /></Link><span className="text-[16px] leading-[22px]">{text_2}</span></p>
        </div>
    </div>
  )
}

export default TrendingCard