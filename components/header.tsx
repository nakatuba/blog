import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoLogoGithub, IoLogoTwitter, IoMoon, IoSunny } from 'react-icons/io5'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')}>
      <Container maxW="4xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <HStack spacing={8}>
            <Link href="/" fontSize={20} fontWeight="bold">
              Home
            </Link>
            <Link href="/posts" fontSize={20} fontWeight="bold">
              Posts
            </Link>
          </HStack>
          <HStack>
            <Button>
              <Link href="https://twitter.com/nakatuba0626" isExternal>
                <IoLogoTwitter size={28} color="#1DA1F2" />
              </Link>
            </Button>
            <Button>
              <Link href="https://github.com/nakatuba" isExternal>
                <IoLogoGithub size={28} />
              </Link>
            </Button>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? (
                <IoMoon size={28} />
              ) : (
                <IoSunny size={28} />
              )}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
