module.exports = {
  siteMetadata: {
    title: 'Claudius Ibn | Instrategista',
    description: 'Dicas para Instagram.',
    siteUrl: 'https://baraodashashtags.com',
    image: '/barao-das-hashtags-large.png',
    twitterUsername: '@baraodashashtags',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          `/*/404`,
          `/*/404.html`,
          `/*/dev-404-page`,
          `/*/offline-plugin-app-shell-fallback`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Claudius Ibn | Instrategista',
        short_name: 'Claudius Ibn',
        start_url: '/',
        background_color: '#0E8CFF',
        theme_color: '#0E8CFF',
        display: 'standalone',
        icon: './static/barao-das-hashtags-large.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: `399549068038246`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-185650998-1`,
      },
    },
  ],
};
