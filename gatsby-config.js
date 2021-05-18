module.exports = {
  siteMetadata: {
    title: "Smoothie Delight",
    description: "Website advertising a new smoothie line",
    image: "/icon.png",
    author: "Piotr Szafranski",
    keywords: `smoothie, delight, fit, health, great taste, lifestyle, remarkable brand`,
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
