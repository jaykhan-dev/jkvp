  // work side bar
const workSideBar = [
    {
        text: 'UI/UX',
        link: '/work/README.md',
        children: [
            { text: 'Conflict Alerts', link: '/work/conflict-alerts.md'},
            { text: 'Pitbull Community', link: ''},
            { text: 'Budgetmore', link: ''},
            { text: 'Scribendi', link: ''},
            { text: 'The Smartest City', link: ''},
            { text: 'ShayBeas Enterprises', link: ''},
        ]
    },
    {
        text: 'JavaScript',
        link: '/work/README.md',
        children: [
            { text: 'Melange Vue', link: ''},
            { text: 'Khan Coins', link: ''},
            { text: 'Spacefold', link: ''},
        ]
    },
    {
        text: 'Graphic Design',
        link: '/work/README.md',
        children: [
            { text: 'Rampart Corp', link: ''},
            { text: 'In Air Marketing', link: ''},
            { text: 'European Cinema', link: ''},
        ]
    },    
]
// blog side bar
const blogSideBar = [
    {
        text: 'UI/UX',
        link: '/blog/README.md'
    }
]
// blog side bar
const musicSideBar = [
    {
        text: 'UI/UX',
        link: '/blog/README.md'
    }
]
// settings
module.exports = {
    // site config
    lang: 'en-US',
    title: 'J. Khan',
    description: 'Past and current work with a blog',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/images/jk-logo-black-border_1.svg',
      // nav
      navbar: [
          { text: 'Work', link: '/work/'},
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
      },
    },
  }