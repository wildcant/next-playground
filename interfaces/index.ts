import { UserState } from './enums'

export type State = {
  user: User
}

export type User = {
  id: string
  name: string
  photo: string
  status: UserState
}

export type Item = {
  id: string
  categoryId: string
  name: string
  price: number
  images: string[]
}

export type Category = {
  id: string
  name: string
  items: Item[]
}
