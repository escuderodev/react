# === anotações importantes ===

- criar um projeto react -> npx create-react-app my-studies --template typescript --use-npm
- para executar o projeto criado -> npm start
- remover arquivos desnecessários
- acessar index.tsx e remover importações desnecessárias
- acessar app.tsx e remover as importações desnecessárias e o header
- index.html é um html base do projeto
- index.tsx é o arquivo principal do projeto que importa entre outros o arquivo app.tsx
- em src, criar pasta components
- em components, vamos criar nossos components
- cerregar os dados das tarefas no componete list
- estilizar os components com scss e css-modules
- instalar css-modules -> npm i -D typescript-plugin-css-modules
- add css-modules no tsconfig.json conforme abaixo:
    {
        "compilerOptions": {
            "plugins": [{"name": "typescript-plugin-css-modules"}]
        }
    }
- renomear todos os arquivos style.scss para style.module.scss
- refatorar as importações dos style.module.scss como um objeto cofnrome abaixo:
    import style from './style.module.scss'
- refatorar os className -> <div className={style.AppStyle}>
- 