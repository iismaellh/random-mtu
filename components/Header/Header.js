import React, { Component } from 'react';
import Destruct from '../../destruct/Destruct';

class Header extends Component {
    render() {
        return (
            <Destruct>
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