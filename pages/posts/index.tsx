import PostCard from '../../components/post-card'
import PostType from '../../interfaces/post'
import { getAllPosts } from '../../lib/posts'
import { Container, Stack } from '@chakra-ui/react'
import moment from 'moment'
import Head from 'next/head'

type Props = {
  posts: PostType[]
}

export default function Posts({ posts }: Props) {
  return (
    <Container maxW="4xl" py={16}>
      <Head>
        <title>Posts | Tsubasa Nakagawa</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Stack spacing={16}>
        {posts
          .sort((a, b) => moment(b.date).diff(a.date))
          .map((post) => (
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
