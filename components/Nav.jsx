import Image from "next/image"
import storefrontLogo from "../public/storefront.svg"
import burgerMenu from "../public/burgerMenu.svg"
import { UserIcon } from '@heroicons/react/24/outline'
import Link from "next/link"

function Nav() {
  return (
    <header className="flex justify-center">
      <nav className="flex items-center justify-between w-[1400px] px-[30px] py-[15px] md:px-[50px] md:py-[15px] lg:px-[50px] lg:py-[20px]">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image src={storefrontLogo} alt="NFT Marketplace Logo" className="w-6 h-6 lg:w-8 lg:h-8" />
          </Link>
          <Link href="/">
            <span className="text-[15px] lg:text-[20px] font-SpaceMono font-semibold tracking-widest whitespace-nowrap">NFT Marketplace</span>
          </Link>
        </div>
        <div className="hidden lg:flex items-center whitespace-nowrap space-x-12">
          <Link href="/marketplace">
            <span className="font-semibold text-[16px] transform duration-300 hover:scale-95">Marketplace</span>
          </Link>
          <Link href="/rankings">
            <span className="font-semibold text-[16px] transform duration-300 hover:scale-95">Rankings</span>
          </Link>
          <Link href="/connectwallet">
            <span className="font-semibold text-[16px] transform duration-300 hover:scale-95">Connect a wallet</span>
          </Link>
          <Link href="/createaccount">
            <button className="button px-7 py-4 bg-[#A259FF]"><UserIcon className='icon' />Sign Up</button>
          </Link>
        </div>
        <Image src={burgerMenu} width={24} height={24} className="lg:hidden" />
      </nav>
    </header>
  )
}

export default Nav