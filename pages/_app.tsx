import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Flex flexDirection="column" minH="100vh">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
