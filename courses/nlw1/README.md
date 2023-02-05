# nlw1

![Imgur](https://i.imgur.com/agf76lb.jpg)

Repo destinado para a semana Next Level Week da [Rocketseat](https://rocketseat.com.br/), antiga Omnistack.

Crie um repo no seu git com o nome do seu projeto e clone o mesmo em sua maquina. E siga os passos seguintes.

## Estudar

- Serealização
- API Transform

```bash
- npm init -y
```

- Criar pakage diretamente sem perguntas

```bash
npm install express
```

- Micro frame para gerenciar rotas.

-- Criar src e depois server.ts

```bash
npm install @types/express -D
```

- Para o node ler TS temos que instalar:

```bash
npm install typescript ts-node -D
```

- Criar arquivo de configuração do Typescript

```bash
npx tsc --init
```

- Reiniciar servidor automaticamente

```bash
npm install ts-node-dev -D
```

- Vamos utilizar o Query builder Knex

```bash
npm intall knex sqlite3
```

- Multer para fazer o gerenciamento de uploads de imagens

```bash
npm install multer
npm install @types/multer -D
```

Lambrando que na pasta DATABASE temos que fazer a configuração da conexão com o banco de dados que estivemos utilizando.

E no diretorio raiz temos que ter um arquivo chamado knexfile.ts ou js. com as configurações de path dos diretorios a serem usados pelo knex.

Depois de ter feito isso e editado as migrations, temos utilizar o comando abaixo:

```bash
npx knex --knexfile knexfile.ts migrate:latest
```

Migrations: procure fazer uma migration por vez, pois mais de uma criada pode acarretar problemas.

- Utilizar cors para fazer o controle de acesso das url da API

```bash
npm install cors @types/cors
```

- Validação de dados de entrada.

```bash
npm install celebrate
```

## Opções de Deploy

### Backend
[Heroku](https://www.heroku.com/#):
- Boa opção para aplicações de estudos e testes de suas aplicações, não é recomendado a utilização em produção no plano gatuito.

[Digital Ocean](https://www.digitalocean.com/):
- Otima opção para projetos maiores e uma boa previsibilidade dos custos operacionais.

[AWS](https://aws.amazon.com/pt/)
[Gcloud](https://cloud.google.com/?hl=pt-br)
[Azure](https://azure.microsoft.com/pt-br/)
- Agora se tratando de projetos em produção e com uma alta demanda, recomenda-se a utilização desses grandes centro de Cloud Computing.

### Front End

[Netlify](https://www.netlify.com/)
[Vercel](https://vercel.com/)

- Para projetos de entrada.

Recomendado:
[AWS S3](https://aws.amazon.com/pt/s3/)
[Gcloud](https://cloud.google.com/storage)

Atenção por algum motivo o --ignore-watch não estava funcionando no master porem no DEV estava, tirei o wacth e voltou tudo ao normal.

Por Jose Ivan Ribeiro de Oliveira em workshop fornecido pela Rocketseat.

"Se você se esforça é porque algo você quer muito."
