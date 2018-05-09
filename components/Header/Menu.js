import React, { Component } from 'react';
import Destruct from '../../destruct/Destruct';
import Head from 'next/head';

class Header extends Component {
    render() {
        return (
            <Destruct>
                <Head>
                    <link rel="stylesheet" href="/static/css/components/header/menu.css" key="menu" />
                </Head>

                <nav id="menu">
                    <ul className="links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="landing.html">Landing</a></li>
                        <li><a href="generic.html">Generic</a></li>
                        <li><a href="elements.html">Elements</a></li>
                    </ul>
                    <ul className="actions vertical">
                        <li><a href="#" className="button special fit">Get Started</a></li>
                        <li><a href="#" className="button fit">Log In</a></li>
                    </ul>
                </nav>
            </Destruct>
        );
    }
}

export default Header;