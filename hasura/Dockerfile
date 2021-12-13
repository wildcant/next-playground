FROM  hasura/graphql-engine

COPY ./migrations /hasura-migrations
COPY ./metadata /hasura-metadata

ENV HASURA_GRAPHQL_ENABLE_CONSOLE=true

# Enable JWT
ENV HASURA_GRAPHQL_JWT_SECRET=HASURA_GRAPHQL_JWT_SECRET

# Secure the GraphQL endpoint
ENV HASURA_GRAPHQL_ADMIN_SECRET=HASURA_GRAPHQL_ADMIN_SECRET

EXPOSE 8080

CMD graphql-engine \
  --database-url $HASURA_GRAPHQL_DATABASE_URL \
  serve \
  --server-port $PORT
