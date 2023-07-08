import { ChakraProvider, Container, Flex } from '@chakra-ui/react'
import Footer from 'components/footer'
import Header from 'components/header'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Flex flexDirection="column" minH="100vh">
        <Header />
        <Container maxW="4xl" pt={32} pb={16}>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
