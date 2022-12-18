import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
import GlobalStyles from './GlobalStyles';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
