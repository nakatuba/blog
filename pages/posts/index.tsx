import { Stack } from '@chakra-ui/react'
import PostCard from 'components/post-card'
import { getAllPosts } from 'lib/posts'
import moment from 'moment'
import Head from 'next/head'
import PostType from 'types/post'

type Props = {
  posts: PostType[]
}

export default function Posts({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Posts | Tsubasa Nakagawa</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Stack spacing={16}>
        {posts
          .sort((a, b) => moment(b.date).diff(a.date))
          .map(post => (
            <PostCard key={post.slug} post={post}></PostCard>
          ))}
      </Stack>
    </>
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
