import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" 
        href="/tandc_logo2.PNG" />
      </Head>
      <main className={styling.mainBody}>
        <div className={styling.body}> 
          <Image width={500} height={500} src='/wallpaper.jpg' alt='real fast logo' className={styling.heroSection}/> 
          <div className={styling.heroSection2}> 
            <ul className={styling.heroSection2Content}>
              <li style={{fontSize:25,color:'white'}}>HI, I'M A FREELANCER</li>
              <li style={{fontSize:60,color:'white'}}>Front-End Developer</li>
            </ul>
            <div className={styling.heroBtnDiv}>
              <Link href='/contact' className={styling.heroBtn}>Contact</Link>
              <Link href='/projects' className={styling.heroBtn} style={{backgroundColor:'none'}}>Project</Link>
            </div> 
          </div>
        </div>
      </main>
    </>
    )
  }

  const styling = {
    mainBody:'relative bg-black',
    body:' w-auto h-screen l:w-[1349px] relative absolute top-0',
    heroSection:'w-[100%] h-screen  ',
    heroSection2:'flex flex-col justify-center items-center w-[100%] h-[100%] l:w-[1349px] bg-[#000]/80 absolute top-0 z-[5] ',
    heroSection2Content:'flex flex-col text-center justify-center items-center',
    heroBtnDiv:'flex flex-row flex-between justify-center items-center gap-3 w-80 h-16',
    heroBtn:'w-[100%] h-[100%] text-[30px] flex items-center justify-center mt-16  bg-orange-600 hover:bg-transparent hover:text-orange-400 rounded-md border ',
  }
