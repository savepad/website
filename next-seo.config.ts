const defaultSEOConfig = {
  titleTemplate: '%s | Savepad',
  defaultTitle: 'Savepad',
  description: 'Collaborative swipe file, knowledge base, and bookmark manager.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://savepad.app',
    site_name: 'Savepad',
    images: [
      {
        url: 'https://savepad.app/images/savepad-og.png',
        width: 1280,
        height: 720,
        alt: 'Savepad',
      },
    ],
  },
  twitter: {
    handle: '@savepadapp',
    site: '@savepadapp',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
