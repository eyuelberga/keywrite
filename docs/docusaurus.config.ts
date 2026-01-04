import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Keywrite',
    tagline: 'JavaScript Input Method Editor (IME) library for adding configurable input methods to web inputs',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://eyuelberga.github.io/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/keywrite/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'eyuel', // Usually your GitHub org/user name.
    projectName: 'keywrite', // Usually your repo name.

    onBrokenLinks: 'throw',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/eyuelberga/keywrite/tree/main/docs',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            },
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'playground', // Required: unique ID for this instance
                path: 'playground', // Folder where playground md files live
                routeBasePath: 'playground', // URL prefix
            },
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'Keywrite',
            logo: {
                alt: 'Keywrite Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    href: '/playground/',
                    position: 'left',
                    label: 'Playground',
                },
                {
                    href: 'https://github.com/eyuelberga/keywrite/',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Keywrite',
                    items: [
                        {
                            label: 'Documentation',
                            to: '/docs/',
                        },
                        {
                            label: 'Playground',
                            to: '/playground/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Eyuel Woldemichael. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    },
};

export default config;
