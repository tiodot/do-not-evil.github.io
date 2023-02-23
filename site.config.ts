import { siteConfig } from "./lib/site-config";

export default siteConfig({
  // the site's root Notion page (required)
  // rootNotionPageId: "09e1941d66b44b6b988a39310378ae94",
  rootNotionPageId: "d653a0d94b4c410db22d6e92da01fa03",

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: undefined,

  // basic site info (required)
  name: "Do Not Evil",
  domain: "xchb.fun",
  author: "xchb",

  // open graph metadata (optional)
  description: "Do not evil, to be a better man",

  // social usernames (optional)
  twitter: "",
  github: "",
  linkedin: "",
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: "https://www.notion.so/images/page-cover/woodcuts_14.jpg",
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  isSearchEnabled: undefined,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: undefined,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: "default",
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
});
