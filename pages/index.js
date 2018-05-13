// pages/index.js
import React, { Component } from 'react';
import axios from 'axios';
import fetch from "isomorphic-fetch";
import Header from '../components/Header/Header';
import Menu from '../components/Header/Menu';
import Cover from '../components/Cover/Cover';
import Section from '../components/Sections/Section';
import Posts from '../components/Posts/Posts';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

import wrapper from '../components/Wrapper/Wrapper';
import { Collapse } from 'react-bootstrap';

class Index extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header></Header>
        <Menu></Menu>
        <Cover page="/about" heading="Hello there stranger!">This is just a random site for a random mtu. :)</Cover>
        <div id="main">
          <Section>
            <Posts></Posts>
          </Section>
        </div>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default Index;