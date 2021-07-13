import { process } from '$lib/markdown'

export async function get({ params }) {
  const { slug } = params
  const { metadata, content } = await process(`contents/guides/${slug}.md`)
  const body = JSON.stringify({ metadata, content })
  return { body }
}
