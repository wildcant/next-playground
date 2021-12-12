# Apollo client - Hasura - Typescript

Based on next js example.

This template extends
[TypeScript and GraphQL Next JS Example](https://github.com/vercel/next.js/tree/canary/examples/with-typescript-graphql).
It uses apollo client and hasura as graphql server to build web apps quickly.

Further, TypeScript and GraphQL Code Generator (graphql-codegen) make it safer
by typing data statically, so you can write truly type-protected code with rich
IDE assists. It enhances the typed GraphQL use as below

```tsx
import { useNewsQuery } from './news.graphql'

const News = () => {
	// Typed already️⚡️
	const { data: { news } } = useNewsQuery()

	return <div>{news.map(...)}</div>
}
```

By default `**/*.graphqls` is recognized as GraphQL schema and `**/*.graphql` as
GraphQL documents. If you prefer the other extensions, make sure the settings of
the webpack loader in `next.config.js` and `.graphql-let.yml` are consistent.

## How to use

Clone this repo/branch and fill environment variables.

```bash
git clone https://github.com/wildcant/next-playground.git
```
