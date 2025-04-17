<div  align="center">
	<h1>
		BlazeDemo com Cypress
	</h1>
</div>

## 🧐 Descrição

Este repositório contém a resolução da atividade de automação do fluxo de compra de passagens para a aplicação [BlazeDemo](https://blazedemo.com).

O projeto faz parte do curso "Formação em Teste de Software" da da [Iterasys](https://iterasys.com.br/pt), ministrado pelo professor José Correia.

## 📚 Tecnologias Utilizadas

- **IDE:** VS Code
- **Linguagem:** JavaScript (Node.js)
- **Framework de Teste:** Cypress
- **Gerenciador de Pacotes:** npm

## ⚙️ Configuração do Ambiente

### Pré-requisitos

Certifique-se de ter instalado:

- Node.js (versão 22.14.0 recomendada).
- npm (gerenciador de pacotes do Node.js).

### Iniciando do Zero

#### Definir a versão do Node.js (caso necessário)

Certifique-se de que você está usando a versão correta do Node.js. Caso necessário, use o NVM para definir a versão:

```sh
nvm use 22.14.0
```

Alternativamente, crie um arquivo `.nvmrc` na raiz do projeto para especificar a versão do Node.js:

```sh
echo "22.14.0" > .nvmrc
```

#### Instalar Dependências

Instale o Cypress utilizando o comando abaixo:

```sh
npm install cypress --save-dev
```

> \*\*Nota: O `--save-dev` adiciona as dependências às `devDependencies`, indicando que são necessárias apenas durante o desenvolvimento.

Verifique se o Cypress está instalado adequadamente:

```sh
npx cypress verify
```

### Clonando o Repositório

#### Clone

Clone este repositório:

```sh
git clone <URL_DO_REPOSITORIO>
```

#### Definir a versão do Node.js (caso necessário)

Certifique-se de que você está usando a versão correta do Node.js. Caso necessário, use o NVM para definir a versão:

```sh
nvm use 22.14.0
```

Alternativamente, crie um arquivo `.nvmrc` na raiz do projeto para especificar a versão do Node.js:

```sh
echo "22.14.0" > .nvmrc
```

#### Instalar Dependências

Execute o seguinte comando para instalar todas as dependências necessárias:

```sh
npm install
```

### 🧪 Execução dos Testes

Para executar os testes automatizados, utilize os seguintes comandos:

- **Abrir o Cypress Test Runner:**

```sh
npx cypress open
```

- **Executar os testes via linha de comando (headless):**

```sh
npx cypress run
```

## 🦸🏻‍♀️ Autor

<div align="center">
  <a href="https://github.com/janascher">
    <img src="https://avatars.githubusercontent.com/u/79182711?v=4" width="150px;" alt="Janaína Scher" style="border-radius: 50%; box-shadow: 0 0 10px rgba(0,0,0,0.2);">
    <br />
    <sub>
      <b>Janaína Scher</b> 👩🏻‍💻
    </sub>
    <br />
    <i>Profissional em Teste de Software e Garantia da Qualidade (QA)</i>
  </a>
</div>
