#!/bin/bash

# Replace snake case with camel case in hasura.
# Improve types/code readability.
# See: https://github.com/hasura/graphql-engine/issues/3320
if [ -f .env ]; then
  export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
  yarn run hasura-camelize --host $NEXT_PUBLIC_HASURA_HOST --secret $NEXT_PUBLIC_HASURA_ADMIN_SECRET --dry
fi