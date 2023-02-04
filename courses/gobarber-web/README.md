# gobarber-web

This repo is destinate to make de web version of GoBarber provide by Rocktseat

## eslint

1. Instale eslint e prettier, e inicie o eslint para termos padrões.

```bash
  yarn add --dev prettier prettierrc eslint eslint-config-prettier eslint-plugin-prettier

  yarn eslint --init
```

2. Crie o arquivo .prettierrc

```json
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

- Se fizer overrides de configurações no Babel terá que utilizar:
  ```bash
  yarn add eslint-import-resolver-babel-plugin-root-import -D
  ```
- .eslint.js > adicionar esses comandos
  ```js
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
  ```
- Criar um arquivo chamado jsconfig.json

  ```json
  {
    "compilerOptions": {
      "baseUrl": "src",
      "paths": {
        "~/*": ["*"]
      }
    }
  }
  ```

## Navigation (Routes)

3. ```bash
    yarn add react-router-dom
    yarn add history
    yarn add reactotron-react-js
    yarn add prop-types
   ```

## Estilização

4. ```bash
   yarn add styled-components
   yarn add @rocketseat/unform
   ```

## Babel config extra

- Para poder mexer as configurações do babel no qual esta dentro dos modulos não acessiveis

5. ```bash
    yarn add customize-cra react-app-rewired -D
    yarn add babel-plugin-root-import -D
   ```

- dentro de todos os arquivos que fazemos importação poderemos usar "~" que refencia a pasta src.

- dentro arquivo package.json temos trocar para react-app-rewired

```json
"scripts": {
   "start": "react-app-rewired start",
   "build": "react-app-rewired build",
   "test": "react-app-rewired test",
   "eject": "react-scripts eject"
 },

```

## validação

[https://github.com/jquense/yup]

Para fazer alguma validações será usado a api Yup serve tanto para backend quanto para frontend.

```bash
  yarn add yup
```

# Arquitetura flux com redux

Uso da arquitetura flux para podermos acessar informações em tempore de execução em qualquer parte da aplicação.

[redux](https://redux.js.org/)
[redux-safa](https://redux-saga.js.org/)
[react-redux](https://react-redux.js.org/)
[reactotron-redux](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md)
[reactotron-redux-saga](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md)
[immer](https://immerjs.github.io/immer/docs/introduction)

```bash
  yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer
```

- App.js imports

  ```js
  import React from 'react';
  import { Provider } from 'react-redux';
  import { Router } from 'react-router-dom';
  import './config/ReactotronConfig';
  import Routes from './routes';
  import history from './services/history';
  import GlobalStyle from './styles/global';
  import store from './store'; // Sempre tem que ser improtado depois do REACTOTRON
  ```

  ## Api backend

  Para podermos conectarmos ao backend remos utilizar o axios

  ```bash
    yarn add axios
  ```

## Persistencia no REDUX

Para podermos conectarmos ao backend remos utilizar o axios

```bash
  yarn add redux-persist
```

## Avisos em toasty

Sempre que o usuario tentar fazer algo que retornar um erro vamos mostrar umas mensagens em toasty para deixar a vizualização mais bonita.

```bash
  yarn add react-toastify
```

## Avatar ramdom

Para se usar um avatasr ramdom em modo de desenvolvimento podemos utilizar a API
[Adorable Avatar](http://avatars.adorable.io/)

## React icos

Alguins icons legais para se colocar no visual da aplicação.

```bash
  yarn add react-icons
```

## perfect scrolbar

Coloar uma scroll bar na estilização das notificações

```bash
  yarn add react-perfect-scrollbar
```

## Data relativa em notificações

Para se fazer o controle relativo do tempo das notificações vamos usar essa bliblio.

```bash
  yarn add date-fns@next
```

Para trabalharmos com conversções de time zone devemos instalar a biblo:

```bash
  yarn add date-fns-tz
```
