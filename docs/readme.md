# 🖥 Teste Prático – Site Front-end

## 📌 Desafio: Crie uma Interface de E-commerce Usando Arquitetura de Micro Frontends

🔗 Deploy: https://ecommerce.thomazot.com.br/

### 🎯 Objetivo
Crie a interface de um e-commerce utilizando Next.js, adotando o modelo de micro frontends, onde:
- **Home, Busca e Página de Produto** serão um micro frontend separado.
- **Checkout** será um micro frontend independente.

A comunicação entre os micro frontends deve ser integrada de forma eficiente, garantindo uma boa experiência do usuário.

### 📜 Requisitos
- ✅ O projeto deve ser desenvolvido em **Next.js**.
- ✅ A arquitetura deve ser baseada em micro frontends, separando as seguintes responsabilidades:
  - **Micro Frontend 1:** Home, Busca e Página de Produto.
  - **Micro Frontend 2:** Checkout.
- ✅ Os dados devem ser consumidos da [Fake Store API](https://fakestoreapi.com/), evitando a necessidade de backend próprio.
- ✅ A aplicação deve seguir princípios de componentização e reutilização de código.
- ✅ O design deve ser **responsivo** e **acessível**.
- ✅ Recomenda-se o uso de uma biblioteca de UI (como Ant Design, Material UI, Tailwind, Chakra UI ou outra de sua escolha) para garantir consistência visual e produtividade.
- ✅ A navegação entre os micro frontends deve ser fluida e bem estruturada, garantindo que as transições sejam transparentes para o usuário.
- ✅ O código deve incluir testes automatizados para os principais fluxos.
- ✅ O projeto deve incluir um **Docker Compose** para facilitar a execução dos micro frontends em ambiente de desenvolvimento.

### 📌 Prazo & Entrega
- ⏳ **Prazo:** 5 dias.
- 📌 Mesmo que não finalize completamente o teste, é essencial submetê-lo. Avaliaremos a estrutura da solução, decisões técnicas e organização do código.
- 📂 O código deve ser enviado em um **repositório público no GitHub**, e o link compartilhado para avaliação.

## 🚀 CI/CD e Deploy

Este projeto possui integração contínua (CI/CD) utilizando **GitHub Actions**. A cada push na branch `main`, o workflow realiza deploy automático para um Droplet na DigitalOcean, utilizando Docker Compose para orquestrar os micro frontends.

- O domínio publicado é: https://ecommerce.thomazot.com.br/
- O workflow copia os arquivos via SSH e executa `docker compose up -d --build` no servidor remoto.

### Secrets necessários no GitHub Actions:
- `DO_HOST`: IP ou hostname do servidor DigitalOcean
- `DO_SSH_KEY`: Chave privada SSH para acesso ao servidor

Para configurar, acesse:
`Settings` → `Secrets and variables` → `Actions` → **New repository secret** 