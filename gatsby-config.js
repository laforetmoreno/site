module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: `1309100156130776`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-8Q9J9Q5Y5Y`,
      },
    },
  ],
};
