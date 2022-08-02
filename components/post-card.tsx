import PostType from '../interfaces/post'
import { Box, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'

type Props = {
  post: PostType
}

export default function PostCard({ post }: Props) {
  return (
    <Box
      as="a"
      href={`/posts/${post.slug}`}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow="2xl"
      rounded="md"
      p={8}
    >
      <Stack>
        <Heading color={useColorModeValue('gray.700', 'white')} fontSize="2xl">
          {post.title}
        </Heading>
        <Text color="gray">{post.date}</Text>
        <Text color="gray" fontSize="xl" noOfLines={2}>
          {post.content}
        </Text>
      </Stack>
    </Box>
  )
}
