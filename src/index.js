import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import './index.scss';
import App from './App';
import store from './redux/store';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    beforeBreadcrumb(breadcrumb, hint) {
      return breadcrumb.category === 'ui.click' ? null : breadcrumb;
    }
  });
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
