import {
  Avatar,
  Center,
  Container,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import PostCard from 'components/post-card'
import { getAllPosts } from 'lib/posts'
import moment from 'moment'
import Head from 'next/head'
import PostType from 'types/post'

type Props = {
  posts: PostType[]
}

export default function Home({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Tsubasa Nakagawa</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Stack align="center" mb={8}>
        <Avatar src="/profile.jpg" size="2xl"></Avatar>
        <Text fontSize="2xl" fontWeight="bold">
          Tsubasa Nakagawa
        </Text>
        <Container maxW="2xl" fontSize="xl" fontFamily="Times New Roman">
          <Text>2st-year master&apos;s student at Iyatomi Lab.</Text>
          <Text>
            Major in Applied Informatics, Graduate School of Science and
            Engineering, Hosei University
          </Text>
        </Container>
      </Stack>
      <Heading mb={4}>Posts</Heading>
      <Stack spacing={8} mb={8}>
        {posts
          .sort((a, b) => moment(b.date).diff(a.date))
          .slice(0, 2)
          .map(post => (
            <PostCard key={post.slug} post={post}></PostCard>
          ))}
      </Stack>
      <Center>
        <Link href="/posts" color="teal.500" fontSize="xl">
          Read more →
        </Link>
      </Center>
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
