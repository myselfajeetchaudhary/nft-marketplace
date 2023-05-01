import Image from "next/image"
import banner from "../public/Create Account Banner.png"
import usericon from "../public/icons/User.png"
import envelopeicon from "../public/icons/EnvelopeSimple.png"
import lockkeyicon from "../public/icons/LockKey.png"

function CreateAccountHeroSec() {
  return (
    <section>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[30px] md:gap-[40px] lg:gap-[60px] mt-[20px] mb-[40px] md:mt-[40px] md:mb-[80px]">
            <Image src={banner} className="rounded-[20px] w-[375px] h-[232px] md:w-[530px] md:h-[530px] lg:w-[610px] lg:h-[610px]" />
            <div className="flex flex-col items-center justify-center md:items-start gap-[40px]">
                <div className="w-[315px] md:w-[325px] lg:w-[460px] h-auto">
                    <h1 className="capitalize text-[28px] md:text-[38px] lg:text-[50px] font-semibold leading-[40px] md:leading-[46px] lg:leading-[56px] mb-[20px]">Create Account</h1>
                    <p className="capitalize text-[16px] lg:text-[22px] leading-[22px] lg:leading-[35px]">Welcome! enter your details and start creating, collecting and selling NFTs.</p>
                </div>
                <div className="">
                    <form action="" className="flex flex-col gap-[15px]">
                        <div className="flex items-center gap-3 w-[315px] h-[46px] md:w-[325px] lg:w-[330px] rounded-[20px] bg-[#FFFFFF]">
                            <Image src={usericon} width={20} height={20} className="ml-5" />
                            <input type="text" required placeholder="Username" className="h-[22px] w-[243px] md:w-[253px] lg:w-[258px] bg-transparent outline-none mr-5 text-black" />
                        </div>
                        <div className="flex items-center gap-3 w-[315px] h-[46px] md:w-[325px] lg:w-[330px] rounded-[20px] bg-[#FFFFFF]">
                            <Image src={envelopeicon} width={20} height={20} className="ml-5" />
                            <input type="email" required placeholder="Email Address" className="h-[22px] w-[243px] md:w-[253px] lg:w-[258px] bg-transparent outline-none mr-5 text-black" />
                        </div>
                        <div className="flex items-center gap-3 w-[315px] h-[46px] md:w-[325px] lg:w-[330px] rounded-[20px] bg-[#FFFFFF]">
                            <Image src={lockkeyicon} width={20} height={20} className="ml-5" />
                            <input type="password" required placeholder="Password" className="h-[22px] w-[243px] md:w-[253px] lg:w-[258px] bg-transparent outline-none mr-5 text-black" />
                        </div>
                        <div className="flex items-center gap-3 w-[315px] h-[46px] md:w-[325px] lg:w-[330px] rounded-[20px] bg-[#FFFFFF] mb-[15px]">
                            <Image src={lockkeyicon} width={20} height={20} className="ml-5" />
                            <input type="password" required placeholder="Confirm Password" className="h-[22px] w-[243px] md:w-[253px] lg:w-[258px] bg-transparent outline-none mr-5 text-black" />
                        </div>
                        <input type="submit" value="Create Account" className="outline-none text-white w-[315px] h-[46px] md:w-[325px] lg:w-[330px] rounded-[20px] bg-[#A259FF] transform duration-300 hover:scale-95" />
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CreateAccountHeroSec