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
            { text: 'WooWay', link: '/work/blockchain/WooWay.md'},
            { text: 'Endeavr', link: '/work/blockchain/endeavr.md'},
            //{ text: 'NFTs', link: '/work/blockchain/NFTs.md'},
            { text: 'Bit & Tonic', link: '/work/blockchain/bitntonic.md'},
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
                text: 'Bitcoin',
                link: '/blog/blockchain/bitcoin',
                children: [
                    { text: 'Lightning Network', link: '/blog/blockchain/bitcoin/lightning-network.md' },
                    { text: 'Earn Bitcoin', link: '/blog/blockchain/bitcoin/earn.md' },
                ]
            },
            { 
                text: 'Algorand', 
                link: '/blog/blockchain/algorand/',
                children: [
                    { text: 'Latest Algo block', link: '/blog/blockchain/algorand/algo-block.md' },
                    { text: 'STOI', link: '/blog/blockchain/algorand/stoi.md' },
                    { text: 'Algorand Standard Asset', link: '/blog/blockchain/algorand/asa.md' },
                    { text: 'Vue + Reach', link: '/blog/blockchain/algorand/vue-reach.md' },
                ]
            },
            {
                text: 'Ethereum',
                link: '/blog/blockchain/ethereum',
                children: [
                    //{ text: 'The Merge', link: '/blog/blockchain/ethereum/eth-merge.md'},
                    //{ text: 'Automata Network', link: '/blog/blockchain/ethereum/automata.md'},
                    { text: 'Infura', link: '/blog/blockchain/ethereum/infura.md'},
                    { text: 'MetaMask', link: '/blog/blockchain/ethereum/metamask.md'},
                ]
            },
            { text: 'Contra', link: '/blog/blockchain/contra.md' },
            //{ text: 'Crypto UX', link: '/blog/blockchain/crypto-ux.md' },
            { text: 'Crypto Jobs', link: '/blog/blockchain/crypto-jobs.md' },
            { text: 'Stablecoins', link: '/blog/blockchain/stablecoins.md' },
            { text: 'DAO', link: '/blog/blockchain/DAO.md' },
            //{ text: 'DeFi', link: '/blog/blockchain/defi.md' },
            //{ text: 'CeFi', link: '/blog/blockchain/cefi.md' },
            { text: 'Web3 Integration', link: '/blog/blockchain/web3-integration.md' },

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
                    { text: 'GSAP', link: '/blog/programming/vue/gsap.md'},
                    { text: 'Responsive Nav', link: '/blog/programming/vue/responsive-nav.md'},
                    { text: 'Marquee', link: '/blog/programming/vue/marquee.md'},
                    { text: 'Global code snippets', link: '/blog/programming/vue/globals.md'},
                ]
            },
            {
                text: 'Python',
                link: '/blog/programming/python/README.md',
                children: [
                    //{ text: 'Choice Coin', link: '/blog/programming/choice-coin.md' }
                    { text: 'Flask Blockchain', link: '/blog/programming/python/flask-blockchain.md' },
                    { text: 'Simple Blockchain in Python', link: '/blog/programming/python/python-blockchain.md' },
                    { text: 'PyScript', link: '/blog/programming/python/py-script.md' }
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
        link: '/blog/life/README.md/',
        children: [
            { text: 'Stoicism', link: '/blog/life/stoicism.md'},            
            { text: 'Alan Watts', link: '/blog/life/alan-watts.md'},
            { text: 'Musashi', link: '/blog/life/musashi.md'},
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
    //description: 'Web3 Portfolio',   

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
                { text: 'Resume', link: '/work/resume.md' },
                { text: 'Tech Stack', link: '/work/tech-stack.md'}
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
                placeholder: '??????',
              },
            },
          },
        ],
      ],
  }