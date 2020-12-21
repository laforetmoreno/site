module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
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
    `gatsby-plugin-react-helmet`,
  ],
};
