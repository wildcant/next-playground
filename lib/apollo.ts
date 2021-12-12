import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import {WebSocketLink} from '@apollo/client/link/ws'
import {IncomingMessage, ServerResponse} from 'http'
import fetch from 'isomorphic-unfetch'
import {useMemo} from 'react'
import {SubscriptionClient} from 'subscriptions-transport-ws'

let accessToken = null

const requestAccessToken = async () => {
  if (accessToken) return
  const res = await fetch(`${process.env.APP_HOST}/api/session`)
  if (res.ok) {
    const json = await res.json()
    accessToken = json.accessToken
  } else {
    accessToken = 'public'
  }
}

const createHttpLink = headers =>
  new HttpLink({
    uri: 'https://learn-hasura-wildt.herokuapp.com/v1/graphql',
    credentials: 'include',
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.NEXT_PUBLIC_HASURA_ACCESS_TOKEN}`,
    },
    fetch,
  })

const createWSLink = () =>
  new WebSocketLink(
    new SubscriptionClient('ws://learn-hasura-wildt.herokuapp.com/v1/graphql', {
      lazy: true,
      reconnect: true,
      connectionParams: async () => {
        await requestAccessToken() // happens on the client
        return {
          headers: {
            authorization: `Bearer ${process.env.NEXT_PUBLIC_HASURA_ACCESS_TOKEN}`,
            'x-hasura-admin-secret':
              process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
          },
        }
      },
    }),
  )

export function createApolloClient(initialState, headers) {
  const ssrMode = typeof window === 'undefined'
  let link = ssrMode ? createHttpLink(headers) : createWSLink()
  return new ApolloClient({
    ssrMode,
    link,
    cache: new InMemoryCache().restore(initialState),
  })
}

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

export type ResolverContext = {
  req?: IncomingMessage
  res?: ServerResponse
}

export function initializeApollo(
  initialState: any = null,
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send
  // a custom context which will be used by `SchemaLink` to server render pages
  context?: ResolverContext,
) {
  const _apolloClient =
    apolloClient ?? createApolloClient(initialState, context?.req?.headers)

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
