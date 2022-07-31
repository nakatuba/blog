import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { getPostBySlug, getAllPosts } from '../../lib/posts'
import styles from '../../styles/Home.module.css'

type Props = {
  post: {
    title: string
    content: string
  }
}

export default function Post({ post }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title}</title>
      </Head>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug)

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
