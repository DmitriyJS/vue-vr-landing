import { createStore } from 'vuex'

export default createStore({
  state: {
    tabsBtnsText: [
      '01 Graphics',
      '02 Controls',
      '03 Processor',
      '04 Set up your play area',
      '05 Gardian activity',
      '06 Headset casting'
    ],
    tabsText: [
      {
        h3: 'Graphics1',
        p: '1With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible'
      },
      {
        h3: 'Controls',
        p: '2With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible'
      },
      {
        h3: 'Processor',
        p: '3With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible'
      },
      {
        h3: 'Set Up your area',
        p: '4With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible'
      },
      {
        h3: 'Gardian activity',
        p: '5With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible'
      },
      {
        h3: 'Headest casting',
        p: '6With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible'
      }
    ],
    gamesItemsContent: [
      {
        img: '/vue-vr-landing/game-1.jpg',
        title: 'Blade Sorcery:Nomad',
        text: 'Step into a medieval fantasy sandbox that uses phisics to serve up some of the most realistic combat in VR',
        link: '#'
      },
      {
        img: '/vue-vr-landing/game-2.jpg',
        title: 'Population: One',
        text: 'Climb anything. Fight everywhere. Experience battle royale only possible in VR',
        link: '#'
      },
      {
        img: '/vue-vr-landing/game-3.jpg',
        title: 'Supernatural',
        text: 'Box, Flow, Meditate and Stretch with real coaches in stunning destinations from around the world. Enjoy new workouts every day.',
        link: '#'
      }
    ],
    acessoriesItemsContent: [
      {
        img: '/vue-vr-landing/accessary-1.jpg',
        title: 'Meta Quest 2 Carrying Case',
        text: 'Protect your system–at home or away.',
        price: '$59.99 USD'
      },
      {
        img: '/vue-vr-landing/accessary-2.jpg',
        title: 'Link Cable',
        text: 'Harness the power of your PC with this premium fiber-optic cable.',
        price: '$79.99 USD'
      },
      {
        img: '/vue-vr-landing/accessary-3.jpg',
        title: 'Meta Quest 2 Active Pack',
        text: 'A wipeable facial interface, wrist straps, and knuckle straps.',
        price: '$69.99 USD'
      },
      {
        img: '/vue-vr-landing/accessary-4.jpg',
        title: 'Meta Quest Gift Cards',
        text: 'Redeemable on 350+ games and apps.',
        price: '$15-50 USD'
      }
    ],
    equipmentItemsContent: [
      {
        img: '/vue-vr-landing/eq-1.jpg',
        title: 'VR Headset',
      },
      {
        img: '/vue-vr-landing/eq-2.jpg',
        title: 'Two Touch Controllers & AA Batteries',
      },
      {
        img: '/vue-vr-landing/eq-3.jpg',
        title: 'Charging Cable & Power Adapter',
      },
      {
        img: '/vue-vr-landing/eq-4.jpg',
        title: 'Glasses Spacer',
      },
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
