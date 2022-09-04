import React from 'react'
import Head from 'next/head'
import { userinfo } from '../Constants/userinfo'

const HeadTag = ({ page }) => {
    return (
        <Head>
            <title>{`${userinfo.logoText} | ${page}`}</title>
            <link rel="icon" href="/favicon.jpeg" />
            <meta name="title" content={userinfo.logoText} />
            <meta name="description" content={userinfo.greeting.subtitle} />

        </Head>
    )
}

export default HeadTag
