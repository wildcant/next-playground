#!/bin/bash

if [ -f .env ]; then
  export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
  hasura metadata export --admin-secret $HASURA_GRAPHQL_ADMIN_SECRET
fi