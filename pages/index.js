// pages/index.js
import React, { Component } from 'react';
import axios from 'axios';
import fetch from "isomorphic-fetch";
import Header from '../components/Header/Header';
import Menu from '../components/Header/Menu';
import Cover from '../components/Cover/Cover';
import SectionOne from '../components/Sections/Section-1';
import SectionTwo from '../components/Sections/Section-2';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

import wrapper from '../components/Wrapper/Wrapper';
import { Collapse } from 'react-bootstrap';

class Index extends Component {
  static async getInitialProps({query}) {
    const res = await fetch( "http://randomtu.com/server/wp-json/wp/v2/posts" );
    const json = await res.json();
    return { posts: json };
  }

  render() {
    return (
      <div id="wrapper">
        <Header></Header>
        <Menu></Menu>
        <Cover page="/about" heading="Hello there stranger!">This is just a random site for a random mtu. :)</Cover>
        <div id="main">
          <SectionOne page="/about" posts={this.props.posts}></SectionOne>
        </div>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default Index;