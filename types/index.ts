import {User} from '../lib/hasura/schema'

export interface Session {
  id: number
  user: User
  expires: string
  token: string
}

export interface Token {
  id: number
  email: string
  name: string
  picture: string
}
