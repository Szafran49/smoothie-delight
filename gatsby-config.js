module.exports = {
  siteMetadata: {
    title: "smoothie-delight",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Dancing script`,
          'Teko',
          'Raleway',
        ],
        display: 'swap'
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
  ],
};
