import Head from 'next/head'
import App from '../App'

const ServerRenderedSite = () => {
    const analytics = typeof window !== 'undefined' ? (function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-17754914-5');
    }()) : ''

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                <meta name="theme-color" content="#000000" />
                <title>Sam Brown</title>
                <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" />
                <meta name="description" content="Making & breaking stuff." />
                <meta property="og:title" content="sgb.io" />
                <meta property="og:description" content="Making & breaking stuff." />
                <meta property="og:site_name" content="sgb.io" />
                <meta property="og:url" content="https://sgb.io" />
                <meta property="og:image" content="https://sgb.io/img/face.jpg" />
                <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />
                <link rel="stylesheet" href="/static/app.css" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-17754914-5"></script>
                <script>{analytics}</script>
            </Head>
            <noscript>
                To read about me, please enable JavaScript. This portfolio site is rendered in your browser using ReactJS.
            </noscript>
            <App />
        </div>
    )
}

export default ServerRenderedSite
