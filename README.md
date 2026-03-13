# Sistema de Matrícula em Cursos Online

## Descrição

Este projeto consiste no desenvolvimento de uma aplicação web para matrícula em cursos online, utilizando arquitetura separada entre frontend e backend.

O sistema permite que o usuário visualize cursos disponíveis e realize sua matrícula preenchendo um formulário com seus dados.

A aplicação foi desenvolvida utilizando tecnologias modernas de desenvolvimento web, com foco em validação de dados, integração entre sistemas e boas práticas de desenvolvimento.

---

## Tecnologias Utilizadas

### Frontend

* Vue.js
* JavaScript
* HTML
* CSS

### Backend

* Node.js
* Express
* TypeScript

### Ferramentas de Desenvolvimento

* Visual Studio Code
* Postman

---

## Funcionalidades

* Listagem de cursos disponíveis através da API

* Formulário de matrícula com:

  * Nome completo
  * E-mail
  * Curso selecionado

* Validação de dados no frontend

* Envio dos dados para a API

* Respostas HTTP apropriadas:

  * **201 Created** – matrícula realizada
  * **400 Bad Request** – erro de validação

---

## Rotas da API

### GET /cursos

Retorna a lista de cursos disponíveis.

Exemplo de resposta:

```
const cursos = [
  { id: 1, nome: "Vue.js Avançado" },
  { id: 2, nome: "Node.js com TypeScript" },
  { id: 3, nome: "UI/UX Design" },
  { id: 4, nome: "Banco de Dados SQL" },
  { id: 5, nome: "Segurança da Informação" },
  { id: 6, nome: "Desenvolvimento Mobile" }
];
```

---

### POST /matricula

Recebe os dados do aluno para registrar a matrícula.

Exemplo de formulário utilizado no frontend:

```
<form @submit.prevent="enviar">
  <div class="campo">
    <label>Nome Completo</label>
    <input v-model="form.nome">
  </div>

  <div class="campo">
    <label>E-mail</label>
    <input v-model="form.email" type="email">
  </div>

  <div class="campo">
    <label>Curso Desejado</label>
    <select v-model="form.curso">
      <option value="">Selecione um curso...</option>
      <option v-for="c in listaCursos" :key="c.id" :value="c.nome">
        {{ c.nome }}
      </option>
    </select>
  </div>
</form>
```

---

## Como executar o projeto

### Backend

Entre na pasta backend e execute:

```
cd backend
npm install
npm run dev
```

Servidor disponível em:

```
http://localhost:3000
```

---

### Frontend

Entre na pasta frontend e execute:

```
cd frontend
npm install
npm run dev
```

Aplicação disponível em:

```
http://localhost:5173
```

---

## Resultado Esperado

Ao executar o projeto corretamente será possível:

1. Instalar as dependências
2. Executar o backend
3. Executar o frontend
4. Realizar uma matrícula de teste no sistema

---

## Autor

Projeto desenvolvido por **Vando Costa**
Curso: Análise e Desenvolvimento de Sistemas
Instituição: Unijorge Paralela
Disciplina: Desenvolvimento Backend I
Ano: 2026

