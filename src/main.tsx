import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from '../src/store';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App/>
    </StrictMode>
  </Provider>
)
