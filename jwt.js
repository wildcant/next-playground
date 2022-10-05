const token = {
  id: '1',
  name: 'joe',
  email: 'joe@mail.com',
}
const jwt = {
  sub: token.id,
  name: token.name,
  email: token.email,
  iat: Date.now() / 1000,
  'https://hasura.io/jwt/claims': {
    'x-hasura-allowed-roles': ['user', 'admin'],
    'x-hasura-default-role': 'user',
    'x-hasura-role': 'admin',
    'x-hasura-user-id': token.id,
  },
}

console.dir(jwt, {depth: null})
