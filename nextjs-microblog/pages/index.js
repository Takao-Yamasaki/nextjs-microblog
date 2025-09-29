import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "@/components/Layout";

import utilStyle from "../styles/utils.module.css"
import { getAllPostsData } from "@/lib/post";
import Head from "next/head";

// SSGの場合
// 一度だけデータを取得したい場合
export async function getStaticProps() {
  // id, title, date, thumbnail
  const allPostsData = getAllPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

// SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     }, 
//   }
// }

export default function Home({ allPostsData }) {
  return <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyle.headingMd}>
      <p>
        私はNext.jsエンジニアです/好きなフレームワークはNext.jsです
      </p>
    </section>

    <section>
      <h2>📝エンジニアのブログ</h2>
      <div className={styles.grid}>
        {allPostsData.map(({id, title, date, thumbnail}) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <img src={`${thumbnail}`} className={styles.thumbnailImage} />
            </Link>
            <Link href={`/posts/${id}`} className={utilStyle.boldText}>
              {title}
            </Link>
            <br/>
            <small className={utilStyle.lightText}>{date}</small>
          </article>
        ))}
      </div>
    </section>
  </Layout>;
}
