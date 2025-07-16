# 🖥 Practical Test – Front-end Site

## 📌 Challenge: Create an E-commerce Interface Using Micro Frontends Architecture

🔗 Deploy: https://ecommerce.thomazot.com.br/

### 🎯 Objective
Create the interface of an e-commerce using Next.js, adopting a micro frontends model, where:
- **Home, Search, and Product Pages** will be a separate micro frontend.
- **Checkout** will be an independent micro frontend.

The communication between the micro frontends must be efficiently integrated, ensuring a good user experience.

### 📜 Requirements
- ✅ The project must be developed in **Next.js**.
- ✅ The architecture must be based on micro frontends, separating the following responsibilities:
  - **Micro Frontend 1:** Home, Search, and Product Page.
  - **Micro Frontend 2:** Checkout.
- ✅ Data must be consumed from the [Fake Store API](https://fakestoreapi.com/), avoiding the need for a custom backend.
- ✅ The application must follow componentization and code reuse principles.
- ✅ The design must be **responsive** and **accessible**.
- ✅ The use of a UI library (such as Ant Design, Material UI, Tailwind, Chakra UI, or another of your choice) is recommended to ensure visual consistency and productivity.
- ✅ Navigation between micro frontends must be smooth and well-structured, ensuring that transitions are transparent to the user.
- ✅ The code must include automated tests for the main flows.
- ✅ The project must include a **Docker Compose** to facilitate running the micro frontends in a development environment.

### 📌 Deadline & Delivery
- ⏳ **Deadline:** 5 days.
- 📌 Even if you do not finish the test completely, it is essential to submit it. We will evaluate the solution structure, technical decisions, and code organization.
- 📂 The code must be sent in a **public GitHub repository**, and the link should be shared for evaluation. 

## 🚀 CI/CD and Deploy

This project has continuous integration (CI/CD) using **GitHub Actions**. On every push to the `main` branch, the workflow automatically deploys to a Droplet on DigitalOcean, using Docker Compose to orchestrate the micro frontends.

- The published domain is: https://ecommerce.thomazot.com.br/
- The workflow copies the files via SSH and runs `docker compose up -d --build` on the remote server.

### Required GitHub Actions Secrets:
- `DO_HOST`: IP or hostname of the DigitalOcean server
- `DO_SSH_KEY`: SSH private key for server access

To configure, go to:  
`Settings` → `Secrets and variables` → `Actions` → **New repository secret** 