// pages/index.js
import React, { Component } from 'react';
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
  static getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: "index" });
      }, 1000);
    });
    return promise;
  }

  render() {
    return (
      <div id="wrapper">
        <Header></Header>
        <Menu></Menu>
        <Cover page="/about" heading="Hello there stranger!">This is just a random site for a random mtu. :)</Cover>
        <div id="main">
          <SectionOne page="/about"></SectionOne>
          <SectionTwo></SectionTwo> 
        </div>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default wrapper(Index);