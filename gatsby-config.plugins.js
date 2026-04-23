const config = require('./config');

module.exports = [
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-less',
  'gatsby-plugin-offline',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Nguyễn Hồng Tín',
      short_name: 'Hồng Tín',
      start_url: '/',
      background_color: '#304CFD',
      theme_color: '#304CFD',
      display: 'standalone',
      icon: 'src/images/icon.png', // This path is relative to the root of the site.
      legacy: true, // this will add apple-touch-icon links to <head>. Required for
      // versions prior to iOS 11.3.
    },
  },
  {
    resolve: 'gatsby-plugin-sitemap',
    options: {
      output: '/sitemap',
      excludes: ['/404', '/404.html'],
    },
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: config.siteUrl,
      sitemap: `${config.siteUrl}/sitemap/sitemap-index.xml`,
      policy: [{ userAgent: '*', allow: '/' }],
    },
  },
  {
    resolve: 'gatsby-plugin-antd',
    options: {
      javascriptEnabled: true,
    },
  },
  // {
  //   resolve: 'gatsby-plugin-google-analytics',
  //   options: {
  //     // The property ID; the tracking code won't be generated without it
  //     trackingId: config.googleAnalyticTrackingId,
  //     // Defines where to place the tracking script - `true` in the head and `false` in the body
  //     head: false,
  //   },
  // },
  {
    resolve: 'gatsby-plugin-nprogress',
    options: {
      // Setting a color is optional.
      color: 'black',
      // Disable the loading spinner.
      showSpinner: true,
    },
  },
];
