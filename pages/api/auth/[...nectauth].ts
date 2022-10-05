import jwt from 'jsonwebtoken'
import {NextApiRequest, NextApiResponse} from 'next'
import NextAuth, {Awaitable, NextAuthOptions} from 'next-auth'
import {JWT} from 'next-auth/jwt'
import GoogleProvider from 'next-auth/providers/google'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import {PrismaClient} from '@prisma/client'

const jwtSecret = JSON.parse(process.env.AUTH_PRIVATE_KEY)

const prisma = new PrismaClient()

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  database: {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: process.env.NODE_ENV === 'production',
    extra: process.env.NODE_ENV === 'production' && {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  session: {
    strategy: 'jwt',
  },
  jwt: {
    encode: async ({token}) => {
      const tokenContents = {
        id: token.id,
        name: token.name,
        email: token.email,
        picture: token.picture,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['admin', 'user'],
          'x-hasura-default-role': 'user',
          'x-hasura-role': 'user',
          'x-hasura-user-id': token.id,
        },
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        sub: token.id,
      }

      const encodedToken = jwt.sign(tokenContents, jwtSecret.key, {
        algorithm: jwtSecret.type,
      })

      return encodedToken
    },
    decode: ({token}) => {
      const decodedToken = jwt.verify(token, jwtSecret.key, {
        algorithms: jwtSecret.type,
      }) as Awaitable<JWT | null>

      return decodedToken
    },
  },
  debug: true,
  callbacks: {
    session: async ({session, user}) => {
      const encodedToken = jwt.sign(user, jwtSecret.key, {
        algorithm: jwtSecret.type,
      })

      session.id = user.id
      session.token = encodedToken

      return Promise.resolve({...session})
    },
    jwt: async ({token, user}) => {
      const isSignIn = user ? true : false

      if (isSignIn) {
        token.id = user.id
      }

      return Promise.resolve(token)
    },
  },
}

const Auth = (req: NextApiRequest, res: NextApiResponse) => NextAuth(options)

export default Auth
