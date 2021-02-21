import { Button, Heading, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { GoMarkGithub } from 'react-icons/go'
import Layout from '../components/Layout'
import { useSharedState } from '../context'
import { loginWithGithub } from '../firebase'

export default function IndexPage() {
  const [state, setState] = useSharedState()

  const onGithubClick = async () => {
    try {
      const user = await loginWithGithub()
      setState({ ...state, user: user ?? state.user })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Heading>Hello Next.js 👋^</Heading>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Button rounded="full" bg="black" color="white" onClick={onGithubClick}>
        <Icon as={GoMarkGithub} marginRight="2" />
        Login with Github
      </Button>
    </Layout>
  )
}
