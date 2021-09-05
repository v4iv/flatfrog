const config = {
  siteTitle: `flatfrog`, // Site title.
  siteTitleAlt: `flatfrog`, // Alternative site title for SEO.
  siteLogo: `/icons/icon-512x512.png`, // Logo used for SEO and manifest.
  siteUrl: `https://flatfrog.com`, // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-business/.
  siteDescription: `flatfrog is the personal blog of Rishabh Chakraborty.`, // Website description used for RSS feeds/meta description tag.
  siteRss: `/rss.xml`,
  googleTagManagerID: process.env.GTM_ID || ``, // GTM tracking ID.
  userName: `Rishabh Chakraborty`,
  userTwitter: `flatfrog`,
  siteFBAppID: ``,
  userLocation: `Bangalore, India`,
  copyright: `Copyright © flatfrog ${new Date().getFullYear().toString()}. All Rights Reserved.`, // Copyright string for the footer of the website and RSS feed.
  themeColor: `#0b9998`, // Used for setting manifest and progress theme colors.
  backgroundColor: `#ffffff`, // Used for setting manifest background color.
  cookieConsent: `This website uses cookies which are used to collect anonymous information to improve your browsing experience and for analytics and metrics.`,
}

module.exports = config
