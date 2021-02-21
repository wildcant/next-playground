import { Category, Item, User } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' }
]

export const items: Item[] = [
  {
    id: '1',
    categoryId: '1',
    name: 'Mochila 1',
    price: 80,
    images: [
      '/images/Bolso-wayuu-para-hombre-y-mujer-min-1024x872.jpg',
      '/images/Bolso-wayuu-para-hombre-y-mujer-min-1024x872.jpg'
    ]
  },
  {
    id: '2',
    categoryId: '1',
    name: 'Mochila 2',
    price: 120,
    images: ['/images/Bolsos-y-Mochila-wayuu-para-hombre-y-mujeres-min.jpeg']
  },
  {
    id: '3',
    categoryId: '1',
    name: 'Mochila 3',
    price: 160,
    images: ['/images/Bolsos-y-Mochila-wayuu-pedreria-min.jpeg']
  },
  {
    id: '1',
    categoryId: '2',
    name: 'Tapizado 1',
    price: 80,
    images: ['/images/Bolso-Wayuu-Tapizado-min-1.jpg']
  }
]

export const categories: Category[] = [
  {
    id: '1',
    name: 'mochilas',
    items: items.filter((item) => item.categoryId === '1')
  },
  {
    id: '2',
    name: 'tapizados',
    items: items.filter((item) => item.categoryId === '2')
  },
  {
    id: '3',
    name: 'trenzados',
    items: items.filter((item) => item.categoryId === '3')
  },
  {
    id: '4',
    name: 'herramientas',
    items: items.filter((item) => item.categoryId === '4')
  }
]
