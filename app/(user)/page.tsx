import { groq } from "next-sanity"
import { client } from "@/lib/sanity.client"
import Bloglist from "@/components/Bloglist";

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`
export const revalidate = 30;
export default async function Home() {

  
  const posts = await client.fetch(query);
  return (
    <>
      <Bloglist posts={posts}/>
    </>
  )
}

