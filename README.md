# ivorpad.com

## Install

First clone the repository:
```sh
git clone https://github.com/ivorpad/ivorpad_com.git your_repo_folder
```

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

Install the dependencies:
```sh
yarn install
```

This website is using [Contentful](https://contentful.com), you need to set both `CONTENTFUL_ACCESS_TOKEN` and `CONTENTFUL_SPACE_ID` environment variables in `.env.development` and `.env.production`

Then you can run it by:
```sh
cd your_repo_folder
gatsby develop
```

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
