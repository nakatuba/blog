import PostType from '../../interfaces/post'
import { getAllPosts, getPostBySlug } from '../../lib/posts'
import { Container, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type Props = {
  post: PostType
}

export default function Post({ post }: Props) {
  return (
    <Container maxW="4xl" py={16}>
      <Head>
        <title>{`${post.title} | Tsubasa Nakagawa`}</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Heading>{post.title}</Heading>
      <ReactMarkdown
        components={{
          img({ src, alt }) {
            const images = require.context('/posts', true, /[^(\.md)]$/)
            const imagePath = `./${path.join(post.slug, src ?? '')}`

            return (
              <Image
                src={images.keys().includes(imagePath) ? images(imagePath) : ''}
                alt={alt}
              />
            )
          },
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className ?? '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={okaidia}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </Container>
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
