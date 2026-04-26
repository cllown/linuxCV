# Variables
CLIENT_DIR = client
DOCKER_COMPOSE = docker-compose

# Default target
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  make install      - Install dependencies for all parts"
	@echo "  make dev          - Run client in development mode"
	@echo "  make build        - Build client for production"
	@echo "  make deploy       - Deploy client to GitHub Pages"
	@echo "  make lint         - Run linter"
	@echo "  make clean        - Remove build artifacts and node_modules"
	@echo "  make docker-up    - Start docker containers (future)"
	@echo "  make docker-down  - Stop docker containers (future)"

# Installation
.PHONY: install
install:
	cd $(CLIENT_DIR) && npm install

# Development
.PHONY: dev
dev:
	cd $(CLIENT_DIR) && npm run dev

# Production Build
.PHONY: build
build:
	cd $(CLIENT_DIR) && npm run build

# Deployment
.PHONY: deploy
deploy:
	cd $(CLIENT_DIR) && npm run deploy

# Linting
.PHONY: lint
lint:
	cd $(CLIENT_DIR) && npm run lint

# Cleanup
.PHONY: clean
clean:
	rm -rf $(CLIENT_DIR)/dist
	rm -rf $(CLIENT_DIR)/node_modules

# Docker (Placeholders for future backend/db)
.PHONY: docker-up
docker-up:
	@echo "Starting Docker containers..."
	# $(DOCKER_COMPOSE) up -d

.PHONY: docker-down
docker-down:
	@echo "Stopping Docker containers..."
	# $(DOCKER_COMPOSE) down
