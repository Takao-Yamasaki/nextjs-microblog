import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postDirectory = path.join(process.cwd(), "posts")

// mdファイルのデータを取り出す
export function getAllPostsData() {
  // 外部APIからデータを取得する場合
  // const fetchData = await fetch("endpoint")

  const fileNames = fs.readdirSync(postDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // ファイル名(id)を取り出す
    const id = fileName.replace(/\.md$/, "");

    // mdファイルを文字列として読み取る
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    // idとデータを返す（Uint8Arrayなど非JSON シリアライズ可能なプロパティを除外）
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData;
}

// getStaticPathでreturnで使うpathを取得する
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    }
  })
}

// idに応じてブログ投稿データを返す関数
export async function getPostData(id) {
  const fullPath = path.join(postDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  // メタデータを取得
  const matterResult = matter(fileContent);

  // mdファイルをHTMLとして出力する
  const blogContent = await remark()
  .use(html)
  .process(matterResult.content);

  const blogContentHTML = blogContent.toString();

  // ...matterResult.data: title, date, author を展開するためのスプレッド構文
  return {
    id,
    blogContentHTML,
    ...matterResult.data,
  }
}
