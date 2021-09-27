import { useRouter } from "next/router";
import Head from 'next/head';
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";

const Feed = ({ feed, updatedAt }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{"WasedaTime Feeds: " + router.query.feed}</title>
        <meta name="description" content={"WasedaTime Feeds: " + router.query.feed} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{router.query.feed}</h1>
      <p>{updatedAt}</p>
      <div>
        <ReactMarkdown children={feed} />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const POSTS_DIRECTORY = path.join(process.cwd(), "public", "feeds");
  const feedNames = await fs.readdirSync(POSTS_DIRECTORY).filter(file => path.extname(file).toLowerCase() === '.md').map(name => name.replace('.md', ''));
  const paths = feedNames.map(name => '/' + name)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const path = process.cwd() + `/public/feeds/${params.feed}.md`;
  const stats = await fs.statSync(path)
  const feed = await fs.readFileSync(path, 'utf8')
  return {
    props: {
      feed: feed,
      updatedAt: stats.mtime.getFullYear() + '-' + stats.mtime.getMonth() + '-' + stats.mtime.getDate()
    }
  }
}

export default Feed;