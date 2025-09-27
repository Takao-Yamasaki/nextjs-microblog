import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/post";

export async function getStaticPaths(params) {
  const paths = getAllPostIds();
  
  // fallback: falseで他のページは404を返す
  return {
    paths,
    fallback: false,
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
  return (
      <Layout>
        {postData.title}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
      </Layout>
  );
}
