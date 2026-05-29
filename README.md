# Node.js CI/CD Pipeline — Day 1 Assignment

A Node.js demo app with a fully automated CI/CD pipeline using GitHub Actions and Docker.

---

## Pipeline Overview

Every push to `main` triggers this 3-stage pipeline automatically:

```
push to main
     │
     ▼
┌─────────┐     ┌─────────┐     ┌──────────────────┐
│  Test   │────▶│  Build  │────▶│ Push to DockerHub │
└─────────┘     └─────────┘     └──────────────────┘
```

---

## Pipeline Stages

### 1. Test
- Checks out the code
- Sets up Node.js 20.x
- Runs `npm ci` to install dependencies
- Runs `npm test` using Jest

### 2. Build
- Runs only if tests pass
- Installs dependencies
- Runs `npm run build` to verify the build script

### 3. Push to DockerHub
- Runs only if build passes
- Only triggers on push to `main` (not on pull requests)
- Builds a Docker image using the `Dockerfile`
- Tags the image as `latest` and `sha-<commit>`
- Pushes to DockerHub
- Verifies the container starts successfully

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Node.js 20.x | Runtime |
| Express | Web framework |
| Jest | Testing |
| Docker (node:20-alpine) | Containerization |
| GitHub Actions | CI/CD automation |
| DockerHub | Image registry |

---

## Project Structure

```
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml        # CI/CD pipeline definition
├── source/
│   ├── _test_/             # Jest test files
│   ├── controllers/        # Route controllers
│   ├── models/             # Data models
│   ├── pages/              # HTML pages
│   └── routes/             # Express routes
├── .babelrc                # Babel config for ES module transpilation
├── .dockerignore           # Files excluded from Docker image
├── Dockerfile              # Docker image definition
├── app.js                  # App entry point
└── package.json            # Dependencies and scripts
```

---

## Setup

### Prerequisites
- Node.js 20.x
- Docker
- DockerHub account

### Run locally

```bash
npm ci
npm test
npm start
```

App runs at `http://localhost:30002`

### Available endpoints

| Endpoint | Description |
|---|---|
| `GET /` | Home page |
| `GET /home` | Home page |
| `GET /today` | Today's date |
| `GET /months` | List of month names |
| `GET /people` | List of people |

---

## Docker

### Build and run manually

```bash
docker build -t nodejs-demo .
docker run -p 30002:30002 nodejs-demo
```

---

## GitHub Secrets Required

Add these in **Settings → Secrets and variables → Actions**:

| Secret | Description |
|---|---|
| `DOCKERHUB_USERNAME` | Your DockerHub username |
| `DOCKERHUB_TOKEN` | DockerHub access token (not your password) |

---

## Workflow File

Located at `.github/workflows/main.yml` — triggers on every push and pull request to `main`.
