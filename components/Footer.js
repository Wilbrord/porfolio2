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
                    <small>&copy; {year}  
                        TeeCeeWears... A Divistion Of Doncaesarius Nig Ltd
                    </small>
                </ul>
            </div>
          
    )
  }
        
  const footerdesign = {
    fotterDiv:' md:h-[200px] p-8 gap-4 flex md:flex-row justify-between items-center bg-black text-orange-500 text-[25px] gap-2',
    iconsBlock:'flex flex-col ml-3',
    detailsBlock:'font-reading text-lg text-white',
  }