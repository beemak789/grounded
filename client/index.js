import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';
import store from './store';
import App from './App';
import { SnackbarProvider } from 'notistack';
import { Button } from '@material-ui/core';

const notistackRef = React.createRef();

const onClickDismiss = (key) => () => {
  notistackRef.current.closeSnackbar(key);
};


ReactDOM.render(
  <SnackbarProvider
    ref={notistackRef}
    action={(key) => <Button onClick={onClickDismiss(key)}>Dismiss
    </Button>}
  >
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </SnackbarProvider>,
  document.getElementById('app')
);
