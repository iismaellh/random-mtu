import React, { Component } from 'react';
import Destruct from '../../destruct/Destruct';
import Head from 'next/head';

class Header extends Component {
    render() {
        return (
            <Destruct>
                <Head>
                    <link rel="stylesheet" href="/static/css/components/header/header.css" key="header" />
                </Head>

                <header id="header" className="alt">
                    <a href="index.html" className="logo"><strong>RANDOM</strong> <span>by mtu</span></a>
                    <nav>
                        <a href="#menu">Menu</a>
                    </nav>
				</header>
            </Destruct>
        );
    }
}

export default Header;