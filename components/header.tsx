import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoMenu,
  IoMoon,
  IoSunny,
} from 'react-icons/io5'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      position="fixed"
      w="100%"
      zIndex={2}
    >
      <Container maxW="4xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box display={{ md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<IoMenu size={28} />}
              ></MenuButton>
              <MenuList>
                <MenuItem as={Link} href="/">
                  Home
                </MenuItem>
                <MenuItem as={Link} href="/posts">
                  Posts
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            <Link href="/" fontSize={20} fontWeight="bold">
              Home
            </Link>
            <Link href="/posts" fontSize={20} fontWeight="bold">
              Posts
            </Link>
          </HStack>
          <HStack>
            <Button
              as={Link}
              href="https://twitter.com/nakatuba0626"
              isExternal
            >
              <IoLogoTwitter size={28} color="#1DA1F2" />
            </Button>
            <Button as={Link} href="https://github.com/nakatuba" isExternal>
              <IoLogoGithub size={28} />
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
