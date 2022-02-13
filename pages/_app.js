import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id='google-script' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script id='google-scrip1' strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>

      <Head>
        <title>PluralForms - Africa Online Form Builder </title>
        <meta charSet='utf-8' />
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <meta content="en" httpEquiv="content-language" />
        <meta name="google-site-verification" content="crMpNztfMCaM3Hy24KLmxazACf-1HMsxSHQDJJkPCzs" />
        <link rel="canonical" href="https://www.pluralforms.com/" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="PluralForms, Africa form builder,PluralForms is free, 
                                         create forms,  plural forms, form analysis, online form builder"/>
        <meta name="description" content="Completely blended for you to create forms 
                                          and get detailed analysis. No login, No hassle. PluralForms is free"/>
        <meta name="robots" content="noindex,follow" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.pluralforms.com/" />
        <meta property="og:title" content="PluralForms:  Africa Online Form Builder" />
        <meta property="og:description" content="Completely blended for you to create forms 
                                          and get detailed analysis. No login, No hassle. PluralForms is free" />

        {/* <meta property="og:image" content="" />    */}
        {/* <meta property="og:image:secure_url" content="" /> */}
        {/* <meta name="twitter:image" content="" /> */}


      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
