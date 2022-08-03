import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} mt="auto">
      <Container maxW="4xl" py={4}>
        <Text textAlign="center">
          © 2022 Tsubasa Nakagawa. All rights reserved
        </Text>
      </Container>
    </Box>
  )
}
