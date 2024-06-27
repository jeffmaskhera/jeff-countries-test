import Head from "next/head"
import React from "react";



export default function NotFoundPage(props) {

    const HeadPage =()=> {
        return <Head>
            <title>Error 404</title>
            <meta name="description" content="Test" />
        </Head>
    }

    return <>
        <HeadPage />
        <h1>Page not found</h1>
    </>
}