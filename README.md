# 📊 Data Engineering Project – Frontend

[![Vercel Deployment](https://img.shields.io/badge/deployed%20on-vercel-000?logo=vercel&labelColor=000)](https://dataengineeringproject-kc11zwaxe-dev-techsters-projects.vercel.app)
[![Build Status](https://github.com/devtechster/dataEngineering/actions/workflows/frontend.yml/badge.svg)](https://github.com/devtechster/dataEngineering/actions)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

The **frontend** of the Data Engineering Project — a modern single-page application built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. It supports Docker-based containerization, CI/CD via GitHub Actions, and is deployed on **Vercel**.

---

## 🌐 Live Demo

🔗 [https://dataengineeringproject-kc11zwaxe-dev-techsters-projects.vercel.app](https://dataengineeringproject-kc11zwaxe-dev-techsters-projects.vercel.app)

---

## 📸 Screenshots / Demo

> _Coming soon: Include screenshots or GIFs here!_

---

## 🚀 Tech Stack

- ⚛️ **React** (with TypeScript)
- ⚡ **Vite** (build tool)
- 🎨 **Tailwind CSS** (utility-first styling)
- 🐳 **Docker** (for containerization)
- 🛠️ **GitHub Actions** (for CI)
- ☁️ **Vercel** (deployment platform)

---

## 📁 Project Structure
├── src/ # App source files
├── public/ or index.html # Vite HTML entry point
├── package.json # Project metadata & scripts
├── vite.config.ts # Vite build configuration
├── tailwind.config.js # Tailwind custom styles
├── vercel.json # Vercel deployment config
├── Dockerfile # Docker container definition
├── .github/workflows/ # CI pipeline


## 🧪 Scripts

| Command             | Description                    |
|---------------------|--------------------------------|
| `npm run dev`       | Run dev server on `localhost`  |
| `npm run build`     | Build production bundle        |
| `npm run preview`   | Preview the production build   |

---

## 🐳 Docker

To build and run the app in a Docker container:

```bash
docker build -t vite-app .
docker run -p 3000:3000 vite-app
Then visit: http://localhost:3000

3000

🔄 CI/CD Pipeline
This project uses GitHub Actions to validate every push:

✅ Install dependencies

✅ Lint the codebase

✅ Build the project

Defined in:
.github/workflows/frontend.yml

Triggers:
On every push to the master branch.

🛠️ Deployment (Vercel)
The project is deployed using Vercel, configured via vercel.json.

🔧 Production Deployment:
🟢 Automatically builds on push to master

🏗️ Runs vite build and serves from dist/

🔧 Manual Deployment:
bash
vercel --prod
This project is licensed under the MIT License

text

MIT License

Copyright (c) 2025 devtechster

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
