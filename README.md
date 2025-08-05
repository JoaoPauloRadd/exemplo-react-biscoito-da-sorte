# 🍪 exemplo-react-biscoito-da-sorte

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-2ea44f?logo=github)](https://joaopauloradd.github.io/exemplo-react-biscoito-da-sorte/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Create React App](https://img.shields.io/badge/build-Create%20React%20App-09D3AC)](https://create-react-app.dev/)

Aplicação em **React** que exibe **frases aleatórias de “biscoito da sorte”** ao clicar em um botão.  
**Demo:** https://joaopauloradd.github.io/exemplo-react-biscoito-da-sorte/

---

## 🔗 Sumário
- [Pré-requisitos](#-pré-requisitos)
- [Como rodar localmente](#-como-rodar-localmente)
- [Scripts disponíveis](#-scripts-disponíveis)
- [Deploy no GitHub Pages](#-deploy-no-github-pages)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Acessibilidade](#-acessibilidade)
- [Roadmap / Ideias](#-roadmap--ideias)
- [Licença](#-licença)

---

## ✅ Pré-requisitos

- **Node.js** 18+
- **npm** (vem com o Node)

> Verifique as versões: `node -v` e `npm -v`

---

## ▶️ Como rodar localmente

    # instalar dependências
    npm install

    # rodar em modo desenvolvimento (http://localhost:3000)
    npm start

    # build de produção
    npm run build

---

## 🧰 Scripts disponíveis

    npm start      # ambiente de desenvolvimento
    npm test       # testes (padrão do CRA)
    npm run build  # build de produção
    npm run deploy # publica no GitHub Pages (branch gh-pages)

---

## 🌐 Deploy no GitHub Pages

Este projeto já está configurado para publicar via `gh-pages`.

Trecho relevante do `package.json`:

    {
      "homepage": "https://joaopauloradd.github.io/exemplo-react-biscoito-da-sorte",
      "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
      }
    }

### Publicar/atualizar

    # após fazer commit & push no branch main
    npm run deploy

Aguarde ~1–2 minutos e acesse:  
**https://joaopauloradd.github.io/exemplo-react-biscoito-da-sorte**

> **Observação (SPA/rotas):** se usar React Router, crie um fallback para evitar 404 ao recarregar rotas:
> - Windows:
>
>       copy build\index.html build\404.html
>
> - Cross-platform (com `shx`):
>
>       npm i -D shx
>       npx shx cp build/index.html build/404.html

---

## 🗂️ Estrutura do projeto


├─ public/
│ └─ index.html
├─ src/
│ ├─ App.js # componente principal e lógica do sorteio
│ ├─ index.js # bootstrap do React
│ ├─ index.css # estilos globais
│ └─ (outros arquivos/estilos/imagens)
├─ package.json
└─ ...

---

## ♿ Acessibilidade

- Garanta que imagens tenham atributo `alt`:

    <img src="{biscoito}" alt="Biscoito da sorte" />

  > Se a imagem for puramente decorativa, use `alt=""`.

---

## 🗺️ Roadmap / Ideias

- Botão “copiar frase”
- Compartilhar em redes sociais
- Trocar tema (claro/escuro)
- Internacionalização (PT/EN)

---

## 📄 Licença

Nenhuma definida

---

> Dúvidas ou sugestões? Fique à vontade para abrir uma *issue* ou *pull request*.
