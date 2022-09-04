import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../Components/HomePage'
import HeadTag from '../Components/HeadTag'


export default function Home({ currentTheme }) {

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <HeadTag page='Home' />
      <HomePage currentTheme={currentTheme} />
    </div>
  )
}
