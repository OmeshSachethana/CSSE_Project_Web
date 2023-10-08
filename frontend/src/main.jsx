import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client'; // Updated import statement

import App from './App'; // Assuming this is your main application component

const root = document.getElementById('root');

const reactRoot = createRoot(root);
reactRoot.render(<App />);
