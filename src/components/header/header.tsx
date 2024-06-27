import React, { useState, useEffect} from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import {urls} from "../../routes/routes-data";

const Header = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('light-style', isDarkMode);
        document.body.classList.toggle('dark-style', !isDarkMode);
    };

    useEffect(() => {
        document.body.classList.add('light-style');
        return () => {
            document.body.classList.remove('light-style');
        };
    }, []);


    return (
        <>
            <header className="header">
                <div className="left-side">
                    <Link href={urls.home}>
                        <h1>Where in the world?</h1>
                    </Link>

                </div>
                <div className="change-style" onClick={toggleDarkMode}>
                    {isDarkMode ? 'Dark mode' : 'Light mode'}
                    <FontAwesomeIcon icon={faMoon} />
                </div>
            </header>
            <div className="empty-space-header" />
        </>


    );
};


export default Header;


