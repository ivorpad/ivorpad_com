let activeEnv = process.env.NODE_ENV;

if (!activeEnv) {
	activeEnv = "development";
}

require("dotenv").config({
	path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: 'Ivor',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ],
}
