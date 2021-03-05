module.exports = {
  siteMetadata: {
    title: "Moreno Andrade | Software Engineer",
    description: "Moreno Andrade | Software Engineer",
    siteUrl: 'https://morenolaforet.dev',
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
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-136143558-1`,
      },
    },
  ],
};
