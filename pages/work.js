// pages/about.js
import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Menu from '../components/Header/Menu';
import Cover from '../components/Cover/Cover';
import Section from '../components/Sections/Section';
import SectionTwo from '../components/Sections/Section-2';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

import wrapper from '../components/Wrapper/Wrapper';
import { Collapse } from 'react-bootstrap';

class About extends Component {
  static async getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: "about" });
      }, 1000);
    });
    return promise;
  }

  render() {
    console.log(this.props);
    return (
      <div id="wrapper">
        <Header></Header>
        <Menu></Menu>
        <Cover page="/" heading="We make product happen.">This is the about page.</Cover>
        <div id="main">
          <Section page="/"></Section>
          <SectionTwo></SectionTwo> 
        </div>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default About;