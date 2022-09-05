import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../Components/HomePage'
import HeadTag from '../Components/HeadTag'
import { GoogleFonts } from "nextjs-google-fonts/GoogleFonts";


export default function Home({ currentTheme }) {

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.jpeg" />
        {GoogleFonts()}
      </Head>
      <HeadTag page='Home' />
      <HomePage currentTheme={currentTheme} />
    </div>
  )
}
