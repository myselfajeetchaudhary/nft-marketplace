import Image from "next/image"

function HowItWorksCard({ icon, title, content }) {
  return (
    <div className="flex flex-row md:flex-col items-center w-[315px] md:w-auto h-auto bg-[#3B3B3B] rounded-[20px] text-center">
        <Image src={icon} className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] lg:w-[250px] lg:h-[250px]" />
        <div className="p-[20px] lg:px-[30px] md:pt-[10px] md:pb-[30px]">
            <h3 className="text-[16px] lg:text-[22px] leading-[22px] lg:leading-[31px] font-semibold mb-[10px] text-left md:text-center">{title}</h3>
            <p className="text-[12px] lg:text-[16px] leading-[17px] lg:leading-[22px] max-w-[16rem] text-left md:text-center">{content}</p>
        </div>
    </div>
  )
}

export default HowItWorksCard