  // work side bar
const workSideBar = [
    { text: 'Work Overview', link: '/work/'},
    { text: 'Resume', link: '/work/resume.md' },
    {
        text: 'UI/UX',
        link: '/work/uiux/README.md',
        children: [
            { text: 'Conflict Alerts', link: '/work/uiux/conflict-alerts.md', },
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
            { text: 'Melange Labs', link: '/work/blockchain/melange-labs.md'},
            { text: 'Endeavr', link: '/work/blockchain/endeavr.md'},
            { text: 'NFTs', link: '/work/blockchain/NFTs.md'},
        ]
    },
    {
        text: 'Graphic Design',
        link: '/work/graphics/README.md',
        children: [
            { text: 'Social Media', link: '/work/graphics/social-media.md'},
            { text: 'Marketing material', link: '/work/graphics/marketing-material.md'},
            { text: 'Posters', link: '/work/graphics/posters.md'},
        ]
    },    
]
// blog side bar
const blogSideBar = [
    {
        text: 'Blockchain',
        link: '/blog/blockchain/README.md',
        children: [
            { 
                text: 'Algorand', 
                link: '/blog/blockchain/algorand/',
                children: [
                    //{ text: 'PureStake', link: '/blog/blockchain/algorand/purestake.md' },
                    { text: 'STOI', link: '/blog/blockchain/algorand/stoi.md' },
                    //{ text: 'Governor', link: '/blog/blockchain/algorand/governor.md' },
                ]
            },
            {
                text: 'Ethereum',
                link: '/blog/blockchain/ethereum',
                children: [
                    //{ text: 'The Merge', link: '/blog/blockchain/ethereum/eth-merge.md'},
                    { text: 'Infura', link: '/blog/blockchain/ethereum/infura.md'},
                ]
            },
            { text: 'Contra', link: '/blog/blockchain/contra.md' },
            //{ text: 'Crypto UX', link: '/blog/blockchain/crypto-ux.md' },
            { text: 'Crypto Jobs', link: '/blog/blockchain/crypto-jobs.md' },
            { text: 'Stablecoins', link: '/blog/blockchain/stablecoins.md' },
            { text: 'DAO', link: '/blog/blockchain/DAO.md' },
            //{ text: 'DeFi', link: '/blog/blockchain/defi.md' }
        ]
    },
    {
        text: 'Programming',
        link: '/blog/programming/',
        children: [
            { 
                text: 'Vue JS', 
                link: '/blog/programming/vue/README.md',
                children: [
                    { text: 'Creating Tabs', link: '/blog/programming/vue/creating-tabs.md'},
                    { text: 'Pinia', link: '/blog/programming/vue/pinia-algo.md'},
                ]
            },
            {
                text: 'Python',
                link: '/blog/programming/python/README.md',
                children: [
                    //{ text: 'Choice Coin', link: '/blog/programming/choice-coin.md' }
                ]
            },
            { text: 'E-Commerce', link: '/blog/programming/e-comm.md'},
            { text: 'Industry', link: '/blog/programming/industry.md'}
        ]
    },
    {
        text: 'Art',
        //link: '/blog/art/',
        children: [
            { text: 'Dune', link: '/blog/art/dune.md' },
            { text: 'Peaky Blinders', link: '/blog/art/peaky-blinders.md' },
            //{ text: 'The Art of War', link: '/blog/art/art-of-war.md'},
        ]
    },
    {
        text: 'Life',
        //link: '/blog/life/',
        children: [
            { text: 'Bio', link: '/blog/life/bio.md' },
            { text: 'Stoicism', link: '/blog/life/stoicism.md'},            
            { text: 'Alan Watts', link: '/blog/life/alan-watts.md'},            
        ]
    },
]
// Music side bar
const musicSideBar = [
    {
        text: 'Music Overview',
        link: '/music/README.md',
        children: [
            //{ text: 'Ophelia', link: '/music/ebs/Ophelia.md'}
        ]
    },
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
    description: 'Web3 Portfolio',   
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/images/jk-logo-black-border_1.svg',
      search: true,
      displayAllHeaders: true,
      searchPlaceholder: 'Search...',
      
      // nav
      navbar: [
        { 
            text: 'Work', 
            link: '/work/README.md',
            children: [
                { text: 'UI/UX', link: '/work/uiux/README.md'},
                { text: 'Blockchain', link: '/work/blockchain/README.md'},
                { text: 'Graphic Design', link: '/work/graphics/README.md'},
                { text: 'Resume', link: '/work/resume.md' }
            ]
        },
        { text: 'Blog', link: '/blog/'},
        { text: 'Music', link: '/music/'},
        { text: 'Contact', link: '/contact/'},
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
    plugins: [
        [
          '@vuepress/plugin-search',
          {
            locales: {
              '/': {
                placeholder: 'Search',
              },
              '/zh/': {
                placeholder: '搜索',
              },
            },
          },
        ],
      ],
  }