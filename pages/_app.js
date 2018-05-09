import React from 'react';
import App, {Container} from 'next/app';
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
  
    return (
        <Container>
            <Head>
              <title key="title">RANDOM by randomtu</title>
              <meta charset="utf-8" key="charset" />
              <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" key="viewport" />
          </Head>
          <Component {...pageProps} />
        </Container>
    );
  }
}

export default RandomApp;