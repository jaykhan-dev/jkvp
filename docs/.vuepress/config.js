  // work side bar
const workSideBar = [
    { text: 'Work Overview', link: '/work/'},
    {
        text: 'UI/UX',
        link: '/work/uiux/README.md',
        children: [
            { text: 'Conflict Alerts', link: '/work/uiux/conflict-alerts.md'},
            { text: 'Budgetmore', link: '/work/uiux/budgetmore.md'},
            { text: 'Scribendi', link: '/work/uiux/scribendi.md'},
            { text: 'ShayBeas Enterprises', link: '/work/uiux/shaybeas.md'},
        ]
    },
    {
        text: 'Blockchain',
        link: '/work/blockchain/README.md',
        children: [
            { text: 'Pitbull Community', link: '/work/blockchain/pitbull-community.md'},
            { text: 'The Smartest City', link: '/work/blockchain/the-smartest-city.md'},
            // { text: 'Melange Vue', link: ''},
            { text: 'Khan Coins', link: '/work/blockchain/khan-coins.md'},
            //{ text: 'BlueAlgo', link: ''},
        ]
    },
    {
        text: 'Graphic Design',
        link: '/work/graphics/README.md',
        children: [
            { text: 'Rampart Corp', link: '/work/graphics/rampart.md'},
            { text: 'In Air Marketing', link: '/work/graphics/in-air-marketing.md'},
            { text: 'European Cinema', link: '/work/graphics/european-cinema.md'},
        ]
    },    
]
// blog side bar
const blogSideBar = [
    {
        text: 'Blockchain',
        link: '/blog/blockchain/README.md',
        children: [
            { text: 'STOI', link: '/blog/stoi.md'},
            { text: 'Why Algorand?', link: ''},
            { text: 'The Ethereum blockchain', link: ''},
            { text: 'Ethereum latest block', link: ''}
        ]
    },
    {
        text: 'Programming',
        //link: '',
        children: [
            { text: 'Headless CMS', link: '/blog/stoi.md'},
            { text: 'JAMStack', link: ''},
            { text: 'Vue JS', link: ''}
        ]
    },
    {
        text: 'Art',
        //link: '',
        children: []
    },
    {
        text: 'Life',
        //link: '',
        children: [
            { text: 'Meditations', link: '/blog/stoi.md'},
            { text: 'The Art of War', link: ''},
            { text: 'DAO', link: ''}
        ]
    },
]
// Music side bar
const musicSideBar = [
    {
        text: 'Eternal Blue Sky',
        link: '/music/ebs/README.md',
        children: [
            //{ text: 'Ophelia', link: '/music/ebs/Ophelia.md'}
        ]
    }
]
// settings
module.exports = {
    // site config
    lang: 'en-US',
    title: 'J. Khan',
    description: 'Portfolio',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/images/jk-logo-black-border_1.svg',
      // nav
      navbar: [
        { 
            text: 'Work', 
            link: '/work/',
            children: [
                { text: 'UI/UX', link: '/work/uiux/README.md'},
                { text: 'Blockchain', link: '/work/blockchain/README.md'},
                { text: 'Graphic Design', link: '/work/graphics/README.md'}
            ]
        },
        { text: 'Blog', link: '/blog/'},
        { text: 'Contact', link: '/contact/'},
        { text: 'Music', link: '/music/'},
        { text: 'Github', link: 'https://github.com/jaykhan-dev'},
        { text: 'Linkedin', link: 'https://www.linkedin.com/in/jkhanprofile'},
      ],
      // sidebars
      sidebar: {
          '/work/': workSideBar,
          '/blog/': blogSideBar,
          '/music/': musicSideBar,
      },
    },
  }