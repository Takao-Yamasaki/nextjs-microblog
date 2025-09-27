import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts")

// mdファイルのデータを取り出す
export function getPostData() {
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
