import PostCard from '../../components/post-card'
import PostType from '../../interfaces/post'
import { getAllPosts } from '../../lib/posts'
import { Container, Stack } from '@chakra-ui/react'

type Props = {
  posts: PostType[]
}

export default function Posts({ posts }: Props) {
  return (
    <Container maxW="4xl" py={16}>
      <Stack spacing={16}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post}></PostCard>
        ))}
      </Stack>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
