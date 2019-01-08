// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const path = require('path');

const webpackConfig = require('./webpack.config.js');

module.exports = {
    webpackConfig: Object.assign({}, webpackConfig, {
        optimization: {
            minimize: false,
        },
    }),
    pagePerSection: true,
    sections: [
        {
            name: 'Introduction',
            content: 'components/styleguide/introduction.md',
        },
        {
            name: 'Colors',
            content: 'components/styleguide/colors.md',
        },
        {
            name: 'Icons',
            content: 'components/styleguide/icons.md',
            components: [
                'components/svg/*.jsx',
            ],
        },
        {
            name: 'Admin Console',
            content: 'components/styleguide/admin.md',
            components: [
                'components/widgets/admin_console/*.jsx',
                'components/widgets/settings/*.jsx',
            ],
        },
        {
            name: 'Common',
            content: 'components/styleguide/common.md',
            components: 'components/widgets/loading/*.jsx',
        },
        {
            name: 'Help',
            components: 'components/help/components/*.jsx',
        },
    ],
    title: 'Mattermost\'s Style Guide',
    usageMode: 'expand',
    exampleMode: 'expand',
    defaultExample: 'components/styleguide/default_example.md',
    theme: {
        maxWidth: '100%',
        sidebarWidth: 250,
        color: {
            link: 'rgb(35, 137, 215)',
            linkHover: 'rgb(70, 69, 171)',
            sidebarBackground: 'rgb(20, 93, 191)',
            errorBackground: 'rgb(214, 73, 70)',
        },
    },
    styles: {
        StyleGuide: {
            logo: {
                border: 0,
                'padding-bottom': 0,
            },
        },
        Logo: {
            logo: {
                color: 'rgb(255,255,255)',
            },
        },
        ComponentsList: {
            heading: {
                'font-size': '1.1em !important',
            },
            item: {
                '& > a, & > a:link, & > a:visited': {
                    color: 'rgba(255,255,255,.90)',
                    cursor: 'pointer',
                },
                '& > a:hover, & > a:active': {
                    color: 'rgb(255,255,255)',
                    cursor: 'pointer',
                },
            },
        },
    },
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'components/styleguide/wrapper'),
    },
    require: [
        'sass/styles.scss',
    ],
};
