import React from "react";
import { createRoot } from "react-dom/client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./index.css";

import App from "./App";

const root = document.getElementById("root");

const reactRoot = createRoot(root);
reactRoot.render(
  <PayPalScriptProvider options={{ "client-id": "Ac4JnJHbCs8lMruxx50gZbXhbTrazoETCM-0SWeDwM9drlNBOu8AnT8D-Tb3bIrSSbu1IyVkREQjkPnx" }}>
    <App />
  </PayPalScriptProvider>
);
