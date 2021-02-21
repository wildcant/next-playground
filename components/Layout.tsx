import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode } from 'react'
import Header from '../components/Header'

type Props = {
  children?: ReactNode
  title?: string
  header?: Boolean
}

const Layout = ({
  children,
  title = 'This is the default title',
  header = true
}: Props) => (
  <Container paddingX="4" paddingY="6" minH="100vh">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {header && <Header />}
    {children}
    <footer>footer</footer>
  </Container>
)

export default Layout
