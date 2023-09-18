import Link from 'next/link';
import { BsFacebook,BsWhatsapp,BsInstagram,BsTwitter } from 'react-icons/bs'



export default function Footer () {
    const year = new Date().getFullYear();
    return (
        
        <div className={footerdesign.fotterDiv}>
        
          
                <ul className={footerdesign.detailsBlock}>
                    <li>TeeCeeWears</li>
                    <li>Motto:Home of Quality Wears</li>
                    <small>&copy; {year}  TeeCeeWears... A Divistion Of Doncaesarius Nig Ltd</small>
                </ul>
                <ul className={footerdesign.iconsBlock}>
                    <li>
                    <Link href='#'><BsFacebook className={footerdesign.icons}/></Link>
                    </li>
                    <li>
                    <Link href='#'><BsWhatsapp className={footerdesign.icons}/></Link>
                    </li>
                    <li>
                    <Link href='#'><BsInstagram className={footerdesign.icons}/></Link>
                    </li>
                    <li>
                    <Link href='#'><BsTwitter className={footerdesign.icons}/></Link>
                    </li>
                </ul>
                <ul className={footerdesign.detailsBlock}>
                    <li>Address : Shop 11, Kubwa Shopping Mall Plot 57, <br/>
                    Hamza Abdullahhi Way, Befor Premium Hotel, Kubwa Abuja.</li>
                    <li>Tel : 08130332218,08055828578,08137315693</li>
                    <li>Email : teenacity@gmail.com</li>
                </ul>
            </div>
          
    )
  }
        
  const footerdesign = {
    fotterDiv:' md:h-[200px] p-8 gap-4 flex flex-col  md:flex-row justify-between items-center bg-[#041562] text-[#FFC2C2] text-lg ',
    icons:'w-6 h-6 md:w-8 md:h-8',
    iconsBlock:'flex flex-col gap-2 text-[#FFC2C2]',
    detailsBlock:'font-reading',
  }