import React, { Component } from 'react';
import Link from 'next/link';
import Destruct from '../../destruct/Destruct';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class SectionOne extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let posts = this.props.posts.map(post => {
            return (
                <article key={post.id}>
                    <span className="image">
                        <img src="/static/images/pic01.jpg" alt="" />
                    </span>
                    <header className="major">
                        <h3><a className="link">{ReactHtmlParser(post.title.rendered)}</a></h3>
                        {ReactHtmlParser(post.excerpt.rendered)}
                    </header>
                </article>
            )
        });

        return (
            <Destruct> 
                <section id="one" className="tiles">
                    {posts}
                </section>
            </Destruct>
        );
    }
}

export default SectionOne;