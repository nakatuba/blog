import { Code, Heading, Link, ListItem, Text } from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import { getAllPosts, getPostBySlug } from 'lib/posts'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import PostType from 'types/post'

type Props = {
  post: PostType
}

export default function Post({ post }: Props) {
  return (
    <>
      <Head>
        <title>{`${post.title} | Tsubasa Nakagawa`}</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Heading mb={4}>{post.title}</Heading>
      <Text textAlign="right" mb={4}>
        {post.date}
      </Text>
      <ReactMarkdown
        components={ChakraUIRenderer({
          p: ({ children }) => (
            <Text fontSize="xl" mb={4}>
              {children}
            </Text>
          ),
          a: props => <Link color="teal.500" {...props}></Link>,
          li: ({ children }) => <ListItem fontSize="xl">{children}</ListItem>,
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className ?? '')
            return !inline ? (
              <SyntaxHighlighter
                style={okaidia as any}
                language={match ? match[1] : ''}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <Code className={className} {...props}>
                {children}
              </Code>
            )
          },
        })}
        linkTarget="_blank"
      >
        {post.content}
      </ReactMarkdown>
    </>
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
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
