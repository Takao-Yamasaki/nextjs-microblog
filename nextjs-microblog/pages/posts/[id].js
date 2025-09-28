import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/post";
import utilStyles from "@/styles/utils.module.css"
import { useRouter } from "next/router";

export async function getStaticPaths(params) {
  const paths = getAllPostIds();
  
  // fallback: falseで他のページは404を返す
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData,
    },
  }
} 

// nfと入力する
export default function Post({ postData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>読み込み中...</div>;
  }

  return (
      <Layout>
        <article>
          <h1 className={utilStyles.headingX1}>{postData.title}</h1>
          <div className={utilStyles.lightText}>{postData.date}</div>
          <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
        </article>
      </Layout>
  );
}
