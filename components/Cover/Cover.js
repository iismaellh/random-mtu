import React, { Component } from 'react';
import Destruct from '../../destruct/Destruct';
import Link from 'next/link';
import Head from 'next/head';

class Cover extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Destruct>
                <Head>
                    <link rel="stylesheet" href="/static/css/components/cover/cover.css" key="cover" />
                </Head>
                
                <section id="banner" className="major">
                    <div className="inner">
                        <header className="major">
                            <h1>{this.props.heading}</h1>
                        </header>
                        <div className="content">
                            <p>{this.props.children}</p>
                            <ul className="actions">
                                <li><Link href={this.props.page}><a className="button">Get Started</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Destruct>
        );
    }
}

export default Cover;