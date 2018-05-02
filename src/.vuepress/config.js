module.exports = {
    title: 'Refined-Twitter-Fork',
    themeConfig: {
        repo: 'ItsRevolt/refined-twitter',
        nav: [
            { text: 'Docs', link: '/pages/' },
        ],
        sidebar: [
            {
                title: 'Main',
                collapsable: false,
                children: [
                    ['/pages/', 'Intro'],
                    ['/pages/installation/', 'Installation']
                ]
            },
            {
                title: 'Open source',
                collapsable: false,
                children: [
                    ['/pages/opensource/', 'Open source'],
                ]
            }
        ]
    }
}