import Link from 'next/link'
import Layout from '../components/Layout'
import {Heading, IconButton} from '@chakra-ui/react'
import {MdShoppingCart} from 'react-icons/md'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Heading as="h1" size="2xl" mb="2">About</Heading>
    <IconButton aria-label="Shopping Cart" icon={<MdShoppingCart />} outline="none" backgroundColor="white" />
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
