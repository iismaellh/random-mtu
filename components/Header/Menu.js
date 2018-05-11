import React, { Component } from 'react';
import Destruct from '../../destruct/Destruct';
import Link from 'next/link';
import Head from 'next/head';

class Header extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <Destruct>
                <Head>
                    <link rel="stylesheet" href="/static/css/components/menu/menu.css" key="menu" />
                </Head>

                <nav id="menu">
                    <ul className="links">
                        <li><Link prefetch href="/"><a>Home</a></Link></li>
                        <li><Link prefetch href="/work"><a>Work</a></Link></li>
                        <li><Link prefetch href="/about"><a>About</a></Link></li>
                        <li><Link prefetch href="/blog"><a>Blog?</a></Link></li>
                        <li><Link prefetch href="/contact"><a>Contact</a></Link></li>
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