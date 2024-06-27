import React from "react";
import "../src/styles/mode-colors.css"
import "../src/styles/index.scss"


import Header from "../src/components/header/header";

export default function App ({Component, pageProps}) {

    return <>
        <Header />
        <Component  {...pageProps}/>
    </>
}