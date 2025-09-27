import Layout from "@/components/Layout";
import { getAllPostIds } from "@/lib/post";

export async function gesStaticPaths(params) {
  const paths = getAllPostIds();
  
  // fallback: falseで他のページは404を返す
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {

    },
  }
} 

// nfと入力する
export default function Post() {
  return (
      <Layout>
        動的ルーティング設定
      </Layout>
  );
}
