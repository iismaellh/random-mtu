import Document, { Head, Main, NextScript } from 'next/document';
import Destruct from '../destruct/Destruct';

class Randomtu extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Destruct>
        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />

          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous" />

          <link rel="stylesheet" href="/static/css/style.css" />
          <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
        </Head>
        <html>
          <body id="top" className="page">
            <Main />
            <NextScript />
          </body>
        </html>
      </Destruct>
    )
  }
}

export default Randomtu;