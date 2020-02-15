const siteAddress = new URL("https://livvysoi.luong.co.uk");

module.exports = {
  siteMetadata: {
    title: `Soi & Liv's Wedding`,
    description: `Remember the date, 10th October 2020.`,
    author: `@soiluong`,
    siteUrl: 'https://livvysoi.luong.co.uk'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: siteAddress.origin,
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname
      },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
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
        fonts: [
          'Lobster',
          'Lato'
        ],
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
