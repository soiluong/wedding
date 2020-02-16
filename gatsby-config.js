// const activeEnv =
//   process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
const path = require('path');
require('dotenv').config({
  path: `.env`
});

const siteAddress = new URL(
  process.env.TARGET_ADDRESS || 'http://localhost:8000'
);

module.exports = {
  siteMetadata: {
    title: `Soi & Liv's Wedding`,
    description: `Remember the date, 10th October 2020.`,
    author: `@soiluong`,
    siteUrl: siteAddress.origin
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        root: path.join(__dirname, 'src')
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.TARGET_BUCKET_NAME || 'fake-bucket',
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
        acl: null
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/assets` // See below to configure properly
        }
      }
    },
    /* eslint-disable */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Liv & Soi's Wedding`,
        short_name: `Liv & Soi's Wedding`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#964850`,
        display: `standalone`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    /* eslint-enable */
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
        fileName: false
      }
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          'https://maps.gstatic.com',
          'https://fonts.gstatic.com',
          'https://maps.googleapis.com'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Lobster', 'Lato'],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteAddress.origin,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          }
        }
      }
    }
  ]
};
