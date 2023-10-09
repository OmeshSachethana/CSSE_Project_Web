import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageRoutes from './routes';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <PageRoutes />
      </Router>
    </Provider>
  );
}
