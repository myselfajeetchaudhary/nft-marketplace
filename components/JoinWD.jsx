import Image from "next/image"
import astronaut from "../public/astronaut.png"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

function JoinWD() {
  return (
    <section className="flex justify-center mt-[40px] mb-[40px] md:mb-[80px]">
        <div className="md:bg-[#3B3B3B] w-auto h-auto md:w-[690px] lg:w-[1050px] rounded-[20px]">
            <div className="flex flex-col md:flex-row items-center gap-[30px] lg:gap-20 px-[30px] py-[40px] lg:p-[60px]">
                <Image src={astronaut} className="w-[315px] h-[255px] md:w-[300px] md:h-[280px] lg:w-[425px] lg:h-[310px] object-cover rounded-[20px]" />
                <div className="flex flex-col items-start w-[315px] h-auto md:w-auto">
                    <h3 className="capitalize text-[28px] lg:text-[38px] leading-[39px] lg:leading-[46px] font-semibold mb-[10px]">Join Our Weekly Digest</h3>
                    <p className="capitalize text-[16px] lg:text-[22px] leading-[22px] lg:leading-[35px] mb-10">Get exclusive promotions & updates straight to your inbox.</p>
                    <form>
                        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0 mb-[15px]">
                            <input type="email" required placeholder="Enter your email here" className="px-5 py-3 lg:py-4 h-auto w-[315px] lg:w-[420px] bg-white rounded-[20px] outline-none text-black" />
                            <button className="flex items-center gap-3 outline-none text-white font-semibold lg:-ml-[210px] px-10 py-3 lg:py-4 h-auto w-[315px] lg:w-[210px] rounded-[20px] bg-[#A259FF] transform duration-300 hover:scale-95"><EnvelopeIcon className="w-5 h-5 text-white" /> Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default JoinWD