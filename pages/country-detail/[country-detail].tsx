import Head from "next/head"
import React from "react";
import { useRouter } from 'next/router';
import CountryDetail from "../../src/pages/country-detail/country-detail";



export default function CountryDetailPage(props) {

    const router = useRouter()
    const route = router.query?.['country-detail']

    const HeadPage =()=> {
        return (
            <Head>
                <title>Jeff test - Country Detail</title>
                <meta name="description" content="Jeff BIA test" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,700;1,200&display=swap" rel="stylesheet"/>
            </Head>
        )
    }


    return <>
        <HeadPage/>
        <CountryDetail route={route}/>
    </>
}