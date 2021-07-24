import Head from 'next/head'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Head>
      <title>Kalani Co - Heavenly Flowers Arranged For You</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Kalani Co Flowers" key="title" />
      <meta property="og:url" content="https://www.kalani-co.com.au" key="url" />
      <meta property="og:type" content="Store" key="type"/>
      <meta property="og:image" content="https://www.kalani-co.com.au/images/front-page.webp" key="image" />
      <meta property="og:description" content="Heavenly dried flower arrangements made from home with love." />
    </Head>
    
      <Component {...pageProps} />
    </div>
  )
  
}

export default MyApp
