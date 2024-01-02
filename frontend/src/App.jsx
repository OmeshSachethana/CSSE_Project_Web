import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "./routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <PageRoutes />
        </Router>
      </PersistGate>
    </Provider>
  );
}
