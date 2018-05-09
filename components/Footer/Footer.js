

import React, { Component } from 'react';
import Destruct from '../../destruct/Destruct';
import Link from 'next/link';
import Head from 'next/head';

class Contact extends Component {
    render() {
        return (
            <Destruct>
                <Head>
                    <link rel="stylesheet" href="/static/css/components/cover/footer.css" key="footer" />
                </Head>

                <footer id="footer">
                    <div className="inner">
                        <ul className="icons">
                            <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                            <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        </ul>
                        <ul className="copyright">
                            <li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                        </ul>
                    </div>
                </footer>
            </Destruct>
        );
    }
}

export default Contact;