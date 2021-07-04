const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Somaliland Profile",
  tagline: "Republic of Somaliland",
  url: "https://somalilandprofile.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  projectName: "somomalilandprofile", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Somaliland",
      logo: {
        alt: "Somaliland Logo",
        src: "img/somaliland.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Country Profile",
        },
        {
          to: "/about",
          position: "left",
          label: "About",
        },
        {
          to: "/updates",
          position: "left",
          label: "Updates",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Profile",
          items: [
            {
              label: "Country Profile",
              to: "/",
            },
          ],
        },
        {
          title: "Other Links",
          items: [
            {
              label: "Ministry of Foriegn Affiars",
              href: "https://somalilandmfa.com/",
            },
            {
              label: "Goverment Site",
              href: "https://www.govsomaliland.org/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/somalilandmfa%20",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Ministry of Information",
              to: "https://warfaafintajsl.com/",
            },
            {
              label: "Ministry of Interior",
              href: "https://somalilandinterior.net/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Somaliland, Country Profile.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/icons/icon-192x192.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/icons/icon-192x192.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/emblem.svg",
            color: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/docusaurus.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000",
          },
        ],
      },
    ],
  ],
};
