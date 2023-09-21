import Link from "next/link";
import { AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { useState } from "react";

export default function NavBar () {
  const [showMobileNav,setShowMobileNav] = useState(false);

    return (
      <>
        <div>
        <nav className={stylings.navstyles}>
          <h1 className={stylings.brandName}>Portfolio.</h1>

          <ul className={stylings.btnBlock}>
            <Link href='/' className={stylings.navIconbutton}>Home</Link>
            <Link href='/about' className={stylings.navIconbutton}>About</Link>
            <Link href='/contact' className={stylings.navIconbutton}>Contact</Link>
            <Link href='/projects' className={stylings.navIconbutton}>Project</Link>
            <li onClick={() => setShowMobileNav(true)}>
              <AiOutlineMenu id="trans" className={stylings.menuIcon} />
            </li>
          </ul>
        </nav>

        <nav className={stylings.mobileNav}
         style={{display:showMobileNav ? 'block' : 'none'}}>
          <AiOutlineClose 
          className={stylings.menuExitIcon}
          onClick={() => setShowMobileNav(false)}/>
          <div className={stylings.menublock}>
              <ul className={stylings.mobileItemBlock} >
                <Link href='/' className={stylings.mobileItems}>Home</Link>
                <Link href='/about' className={stylings.mobileItems}>About</Link>
                <Link href='/contact' className={stylings.mobileItems}>Contact</Link>
                <Link href='/projects' className={stylings.mobileItems}>Project</Link>
              </ul>
          </div>
        </nav>
        </div>
      </>
    )

}

const stylings = {
  navstyles:'flex flex-row justify-between items-center h-[80px] bg-black sticky top-0 z-10',
  brandName:'text-white text-[35px] font-brandFont pl-2 md:pl-6',
  menuIcon:'block md:hidden text-white h-8 w-8',
  navIconbutton:'text-orange-500 text-lg hidden md:block',
  btnBlock:'flex flex-row items-center space-x-3 pr-5 ',
  btnStylings:' h-10 w-20 bg-[#FFC2C2] rounded-md',
  menublock:'h-[100%] w-screen flex flex-col justify-center align-center bg-black absolute right-0 top-0 z-10',
  mobileNav:'h-auto',
  mobileItemBlock:'flex justify-center align-center flex-col text-right',
  menuExitIcon:'text-[#ED2B2A] w-[50px] h-[40px] text-white absolute top-5 right-2 z-20',
  mobileItems:'flex justify-center align-center font-reading text-orange-600 text-[45px] gap-2 mt-4',
  }