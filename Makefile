.PHONY: help
.DEFAULT_GOAL := help

up: ## コンテナを起動
	docker compose up -d
down: ## コンテナを停止
	docker compose down
rebuild: ## コンテナを再ビルド
	docker compose up -d --build
app: ## appコンテナに入る
	docker compose exec -it app bash
ps: ## コンテナの起動状況確認
	docker compose ps
buildprod: ## 本番用コンテナのビルド 
	docker build -f Dockerfile.prod -t nextjs-microblog:latest .
runprod: ## 本番用コンテナの起動
	docker run -p 3000:3000 nextjs-microblog:latest
help: ## ヘルプを表示する
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
