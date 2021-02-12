import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>Next.JS Starter Template</title>
        <meta name='keywords' content='Microsoft Teams, UC, VOIP, Telecoms, PBX' />
      </Head>
      <ArticleList articles={articles} />
      <div>
      </div>
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}