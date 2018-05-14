import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Destruct from '../../destruct/Destruct';

import withFetching from '../../hoc/withFetching';

const Posts = ({ data, loading, error }) => {
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
  
    return (
        <Destruct>
            {posts}
        </Destruct>  
    );
}

const ssl = location.protocol != 'https:' ? 'http' : 'https';

export default withFetching(`${ssl}://www.randomtu.com/server/wp-json/wp/v2/posts?_embed&per_page=4`)(Posts);