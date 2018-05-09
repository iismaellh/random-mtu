import App, {Container} from 'next/app';
import React from 'react';
import Head from 'next/head';

class RandomApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    //console.log(this.props);
    return (
        <Container>
            <Component {...pageProps} />
        </Container>
    );
  }
}

export default RandomApp;