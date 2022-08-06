import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export function getPostBySlug(slug: string) {
  const filePath = path.join('contents/posts', slug, 'index.md')
  const file = fs.readFileSync(filePath)
  const { data, content } = matter(file)

  return {
    slug,
    ...data,
    content,
  }
}

export function getAllPosts() {
  const slugs = fs.readdirSync('contents/posts')
  const posts = slugs.map((slug) => getPostBySlug(slug))

  return posts
}
