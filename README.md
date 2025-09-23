# nextjs-microblog
Next.jsで実装したブログアプリのリポジトリです。

## プロジェクトの新規作成方法
- appコンテナを起動
```bash
make up
```
- appコンテナの稼働状況を確認
```bash
make ps
```
- appコンテナに入る
```bash
make app
```
- Nodeのバージョン確認
```bash
node -v
v18.20.8
```
- npmのバージョン確認
```bash
npm -v
10.8.2
```
- npxのバージョン確認
```bash
npx -v
10.8.2
```
- yarnのバージョン確認
```bash
yarn -v
1.22.22
```
- appコンテナ内でプロジェクトを作成(`despatched`)
```bash
npx create-next-app .
```
- プロジェクト直下でGit管理したいので、競合を防止するため、`nextjs-microblog`配下に新規作成された次のファイルをコピーして、削除
```bash
cp -p nextjs-microblog/.gitignore .
rm -rf nextjs-microblog/.gitignore nextjs-microblog/README.md
```
- appコンテナ内でサーバーを起動
```bash
make rebuild
```
- [localhost:3000](localhost:3000)にアクセス

## 参考
- [Start a New React Project](https://18.react.dev/learn/start-a-new-react-project)
- [Devcontainer で Claude Code を使う時はfeatures でインストール出来る](https://qiita.com/fussy113/items/eba52ac807c060dce379)
