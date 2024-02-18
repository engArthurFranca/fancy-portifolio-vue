import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: {
      isDark: false,
    },
    cards: {
      big: [
        {
          title: 'SAS2D',
          desc: 'A Web App for Structural Analysis',
          link: 'https://sas2d.com',
          svgIcon: 'sas2d'
        }
      ],
      small: [
        {
          title: 'Cryptogram',
          desc: 'A Cryptogram game deployed in vue3',
          link: 'https://engarthurfranca.github.io/cryptogram-vue3/',
          gitLink: 'https://github.com/engArthurFranca/cryptogram-vue3',
          svgIcon: ''
        },
        {
          title: 'Navbar + Vue Router',
          desc: 'A Bootstrap NavBar with Router in vue3',
          link: 'https://engarthurfranca.github.io/menu-bootstrap-router-vue3/',
          gitLink: 'https://github.com/engArthurFranca/menu-bootstrap-router-vue3',
          svgIcon: ''
        },
        {
          title: 'Valentine',
          desc: "Wish to propose? Pretty sure no one can't deny it",
          link: 'https://engarthurfranca.github.io/valentine-proposal/',
          gitLink: 'https://github.com/engArthurFranca/valentine-proposal',
          svgIcon: ''
        }
      ]
    },
    formations: [
      {
        title: 'Civil Engineering',
        date: 'Agost 29, 2019',
        desc: 'Graduation',
        institution: 'UFAL',
        link: 'https://https://ufal.br/',
      },
      {
        title: 'Software Engineering',
        date: 'Current',
        desc: 'Graduation',
        institution: 'UNINTER',
        link: 'https://www.uninter.com/',
      }
    ]
  },
  getters: {
  },
  mutations: {
    toggleTheme(state) {
      state.theme.isDark =!state.theme.isDark
    }
  },
  actions: {
  },
  modules: {
  }
})
