import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Link from 'next/link';
import Destruct from '../../destruct/Destruct';
import fetch from "isomorphic-fetch";

class SectionOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            isLoading: false
        };
    }

    fetchPosts() {
        this.setState({ isLoading: true });

        fetch('https://randomtu.com/server/wp-json/wp/v2/posts?_embed')
            .then(response => response.json())
            .then(data => this.setState({ posts: data, isLoading: false }));
    }

    componentDidMount() {
        this.fetchPosts();
    }  

    render() {
        let { posts, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        if(this.state.posts) {
            posts = this.state.posts.map(post => {
                const image = post._embedded['wp:featuredmedia'] !== undefined ? post._embedded['wp:featuredmedia'][0].source_url : '';
                return (
                    <article key={post.id}>
                        <span className="image">
                            <img src={image} alt="" />
                        </span>
                        <header className="major">
                            <h3><a className="link">{ReactHtmlParser(post.title.rendered)}</a></h3>
                            {ReactHtmlParser(post.excerpt.rendered)}
                        </header>
                    </article>
                )
            });
        }

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