import Link from "next/link";

// nfと入力すると雛形が記述される
// /posts/firstPostでルーティングされる
// aタグだとリロードが走る
export default function FirstPost() {
  return (
    <div>
      <h1>最初の投稿</h1>
      <Link href="/">ホームへ戻る</Link>
    </div>
  );
}
