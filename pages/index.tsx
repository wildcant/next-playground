import {
  useGetOnlineUsersSubscription,
  useGetUserByIdQuery,
  useUpdateUserOnlineMutation,
} from '../lib/user.graphql'

const Index = () => {
  const userRes = useGetUserByIdQuery({variables: {id: '1'}})
  const onlineUsersRes = useGetOnlineUsersSubscription()
  const [setUserOnline] = useUpdateUserOnlineMutation()

  const setOnline = async () => {
    await setUserOnline({variables: {id: '2'}})
  }

  if (userRes.error) {
    return <div>Error happened</div>
  }

  if (!userRes.loading && userRes.called && !userRes.data?.user) {
    return <div>User not found</div>
  }

  return userRes.loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      Hello {userRes.data?.user?.name} <br />
      Online Users: {onlineUsersRes.data?.onlineUsers?.length}
      <br />
      <button onClick={setOnline}>Set as online</button>
    </div>
  )
}

export default Index
