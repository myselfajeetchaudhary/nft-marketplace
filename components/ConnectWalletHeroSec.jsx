import Image from "next/image"
import banner from "../public/Connect Wallet.png"
import metamask from "../public/Metamask.png"
import wallet from "../public/WalletConnect.png"
import coinbase from "../public/Coinbase.png"

function ConnectWalletHeroSec() {
  return (
    <section>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[30px] md:gap-[40px] lg:gap-[60px] mt-[20px] mb-[40px] md:mt-[40px] md:mb-[80px]">
            <Image src={banner} className="rounded-[20px] w-[375px] h-[232px] md:w-[530px] md:h-[530px] lg:w-[610px] lg:h-[610px]" />
            <div className="flex flex-col items-center justify-center md:items-start gap-[40px]">
                <div className="w-[315px] md:w-[325px] lg:w-[460px] h-auto">
                    <h1 className="capitalize text-[28px] md:text-[38px] lg:text-[50px] font-semibold leading-[40px] md:leading-[46px] lg:leading-[56px] mb-[20px]">Connect Wallet</h1>
                    <p className="capitalize text-[16px] lg:text-[22px] leading-[22px] lg:leading-[35px]">Choose a wallet you want to connect. There are several wallet providers.</p>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <button className="flex items-center gap-[20px] w-[320px] lg:h-[72px] h-[60px] border border-[#A259FF] rounded-[20px] transform duration-300 hover:scale-95"><Image src={metamask} className="lg:w-[40px] lg:h-[40px] md:w-[32px] md:h-[32px] ml-[40px]" /><p className="w-[208px] h-[31px] text-[22px] leading-[31px] lg:font-semibold md:mr-[20px] inline-block text-left">Metamask</p></button>
                    <button className="flex items-center gap-[20px] w-[320px] lg:h-[72px] h-[60px] border border-[#A259FF] rounded-[20px] transform duration-300 hover:scale-95"><Image src={wallet} className="lg:w-[40px] lg:h-[40px] md:w-[32px] md:h-[32px] ml-[40px]" /><p className="w-[208px] h-[31px] text-[22px] leading-[31px] lg:font-semibold md:mr-[20px] inline-block text-left">Wallet Connect</p></button>
                    <button className="flex items-center gap-[20px] w-[320px] lg:h-[72px] h-[60px] border border-[#A259FF] rounded-[20px] transform duration-300 hover:scale-95"><Image src={coinbase} className="lg:w-[40px] lg:h-[40px] md:w-[32px] md:h-[32px] ml-[40px]" /><p className="w-[208px] h-[31px] text-[22px] leading-[31px] lg:font-semibold md:mr-[20px] inline-block text-left">Coinbase</p></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ConnectWalletHeroSec