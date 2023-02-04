import React from 'react';
import { ToastContainer } from 'react-toastify'; // TOAST import
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'; // REDUX provider import
import { Router } from 'react-router-dom';

import './config/ReactotronConfig'; // REACTOTRON import

import Routes from './routes';
import history from './services/history'; // NAVIGATION history

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}
/** Sempre que tivermos um History ele iria ficar "escutando" as
 * roas para poder usar-las em outros lugares da aplicação */
export default App;
