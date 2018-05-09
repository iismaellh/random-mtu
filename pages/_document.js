import Document, { Head, Main, NextScript } from 'next/document';

class Randomtu extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
            <title>RANDOM by randomtu</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />

            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous" />
             
            <link rel="stylesheet" href="/static/css/style.css" />
            <link rel="stylesheet" href="/static/css/font-awesome.min.css" />

            <script src="static/js/jquery.min.js"></script>
            <script src="static/js/jquery.scrolly.min.js"></script>
            <script src="static/js/jquery.scrollex.min.js"></script>
            <script src="static/js/skel.min.js"></script>
            <script src="static/js/util.js"></script>
            <script src="static/js/main.js"></script>
        </Head>
        <body id="top" className="page">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Randomtu;