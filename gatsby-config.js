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
        trackingId: `UA-185650998-1`,
      },
    },
  ],
};
