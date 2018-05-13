import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Destruct from '../../destruct/Destruct';
import withFetching from '../../hoc/withFetching';
import fetch from 'isomorphic-fetch';

class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            loading: false,
            error: null,
        };
    } 

    componentWillFetch(url) {
        this.setState({ loading: true });

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ data, loading: false }))
            .catch(error => this.setState({ error, loading: false }));
    }

    componentDidFetch() {
        const { data, loading, error } = this.state;

        let posts = data || [];

        if (error) {
          return <p>{error.message}</p>;
        }
    
        if (loading) {
          return <p>Loading ...</p>;
        }

        if(posts) {
            posts = posts.map(post => {
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
        
        return posts;
    }

    componentDidMount() {
        this.componentWillFetch(`http://www.randomtu.com/server/wp-json/wp/v2/posts?_embed`);
    }

    render() {
        let posts = this.componentDidFetch();

        return (
            <Destruct>
                {posts}
            </Destruct>  
        );
    }
}

export default Posts;