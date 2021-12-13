import {
  useGetOnlineUsersSubscription,
  useGetUserByIdQuery,
  useUpdateUserOnlineMutation,
} from '../lib/hasura/user.graphql'

const Index = () => {
  const userRes = useGetUserByIdQuery({variables: {id: 1}})
  const onlineUsersRes = useGetOnlineUsersSubscription()
  const [setUserOnline, setUserOnlineRes] = useUpdateUserOnlineMutation()

  const setOnline = async () => {
    try {
      await setUserOnline({variables: {id: 2}})
    } catch (error) {
      console.log({error})
    }
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
