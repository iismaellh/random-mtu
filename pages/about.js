// pages/about.js
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

class About extends Component {
  static getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: "about" });
      }, 1000);
    });
    return promise;
  }

  render() {
    return (
      <div id="wrapper">
        <Header></Header>
        <Menu></Menu>
        <Cover page="/" heading="Wanna know more about me?">This is the about page.</Cover>
        <div id="main">
          <SectionOne page="/"></SectionOne>
          <SectionTwo></SectionTwo> 
        </div>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default wrapper(About);