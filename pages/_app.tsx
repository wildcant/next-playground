import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { defaultValues, SharedStateProvider } from '../context'
import { Fonts, theme } from '../theme/index'
import { loadValues } from '../utils/localStorage'

export default function MyApp({ Component, pageProps }: AppProps) {
  const persistedState = loadValues()
  return (
    <SharedStateProvider initialState={{ ...defaultValues, ...persistedState }}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </SharedStateProvider>
  )
}
