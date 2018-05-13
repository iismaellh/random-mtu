import React, { Component } from 'react';
import Link from 'next/link';
import Destruct from '../../destruct/Destruct';

class Section extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Destruct> 
                <section id="one" className="tiles">
                    {this.props.children}
                </section>
            </Destruct>
        );
    }
}

export default Section;