import { AppProps } from 'next/app'
import { ThemeProvider, CSSReset } from '@chakra-ui/react'
import theme, { Fonts } from '../theme/index'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Fonts />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
