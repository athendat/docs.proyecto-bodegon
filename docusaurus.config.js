const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://athendat.github.io',
  baseUrl: '/docs.proyecto-bodegon/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'athendat', // GitHub org/user name
  projectName: 'docs.proyecto-bodegon', // Repo name

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Edit URL para sugerencias de edición
          editUrl: 'https://github.com/athendat/docs.proyecto-bodegon/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/athendat/docs.proyecto-bodegon/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Plataforma Bodegón',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentación',
          }
        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `Proyecto desarrollado por ATHENDAT | https://athendat.site`,
      },
      prism: {
        theme: lightCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
});
