import fetch from "isomorphic-fetch";

export default function fetchPosts() {
    return fetch( "https://randomtu.com/server/wp-json/wp/v2/posts?_embed" )
        .then( res => res.json( ) )
}