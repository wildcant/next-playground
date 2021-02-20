import { Category, User } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' }
]

export const categories: Category[] = [
  {
    id: '1',
    name: 'mochilas',
    items: [
      {
        name: 'Mochila #',
        price: 80,
        image: '/images/Bolso-wayuu-para-hombre-y-mujer-min-1024x872.jpg'
      },
      {
        name: 'Mochila #',
        price: 120,
        image: '/images/Bolsos-y-Mochila-wayuu-para-hombre-y-mujeres-min.jpeg'
      },
      {
        name: 'Mochila #',
        price: 160,
        image: '/images/Bolsos-y-Mochila-wayuu-pedreria-min.jpeg'
      }
    ]
  },
  {
    id: '2',
    name: 'tapizados',
    items: [
      {
        name: 'Mochila #',
        price: 80,
        image: '/images/Bolso-Wayuu-Tapizado-min-1.jpg'
      }
    ]
  },
  {
    id: '3',
    name: 'trenzados',
    items: []
  },
  {
    id: '4',
    name: 'herramientas',
    items: []
  }
]
