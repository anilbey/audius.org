import React, { useEffect } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import TagManager from 'react-gtm-module'

import { PageLayout } from 'components/PageLayout'
import init from 'public/build/js/main'
import 'public/styles/index.scss'

const tagManagerArgs = {
  gtmId: 'GTM-TTM6CHS',
  dataLayer: {
    js: new Date(),
    config: 'UA-120325397-4'
  }
}

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  const router = useRouter()

  useEffect(() => {
    // Reinit the animations/modals/etc found in main.js
    // (Hopefully we can migrate away from this eventually)
    init()
  }, [router.pathname])

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
        />
      </Head>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>

      <script src='/js/vendor/jquery-3.3.1.min.js'></script>
      <script src='/build/js/modernizr-custom.min.js'></script>
      <script src='/build/js/MorphSVGPlugin.min.js'></script>
      <script src='/build/js/TweenMax.min.js'></script>
      <Script src='/build/js/player.js'></Script>
      <Script src='/build/js/retina.js'></Script>
      {/* <Script src='/build/js/custom.js'></Script> */}
    </>
  )
}

export default MyApp
