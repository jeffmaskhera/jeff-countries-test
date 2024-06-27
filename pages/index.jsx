import Head from "next/head"
import React from "react";
import Home from "../src/pages/home/home"


export default function Index(props) {

    const HeadPage =()=> {
        return (
            <Head>
                <title>JEFF TEST</title>
                <meta name="description" content="JEFREY SANCHEZ TEST" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,700;1,200&display=swap" rel="stylesheet"/>
            </Head>
        )
    }

    return <>
        <HeadPage />
        <Home />
    </>
}