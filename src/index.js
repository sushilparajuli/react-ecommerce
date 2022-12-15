import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { Provider } from 'react-redux';
import { CartProvider } from './contexts/cart.context';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
import GlobalStyles from './GlobalStyles';
import { store } from './store';
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartProvider>
          <GlobalStyles />
          <App />
        </CartProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
