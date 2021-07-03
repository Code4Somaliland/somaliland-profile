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
      title: "Somaliland Profile",
      logo: {
        alt: "Somaliland Logo",
        src: "img/somaliland.svg",
      },
      items: [
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
              label: "Profile",
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
  // plugins: [
  //   [
  //     "@docusaurus/plugin-ideal-image",
  //     {
  //       quality: 70,
  //       max: 1030,
  //       min: 640,
  //       steps: 2,
  //     },
  //   ],
  // ],
};
