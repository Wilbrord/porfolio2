import Link from 'next/link';
import { BsFacebook,BsWhatsapp,BsInstagram,BsTwitter } from 'react-icons/bs'



export default function Footer () {
    const year = new Date().getFullYear();
    return (
        
        <div className={footerdesign.fotterDiv}>

                <ul className={footerdesign.iconsBlock}>
                    <li>
                    <Link href='/'>Home</Link>
                    </li>
                    <li>
                    <Link href='#'>About me</Link>
                    </li>
                </ul>
                <ul className={footerdesign.iconsBlock2}>
                    <li>
                        <Link href='#'>Projects</Link>
                    </li>
                    <li>
                        <Link href='#'>Contact me</Link>
                    </li>
                </ul>
                <ul className={footerdesign.detailsBlock}>
                    <li>Tel : 07017657170, 07048109893</li>
                    <li>Email : stanwilbrord@gmail.com</li> 
                    <small>&copy; {year}</small>
                </ul>
            </div>
          
    )
  }
        
  const footerdesign = {
    fotterDiv:'md:h-[150px] flex justify-between flex-row justify-center items-center bg-black text-gray-500 text-[28px]',
    iconsBlock:'flex flex-col ml-6 gap-4',
    iconsBlock2:'flex flex-col ml-6 gap-4 text-orange-600 ',
    detailsBlock:'font-reading text-lg text-white mr-6 gap-2',
  }