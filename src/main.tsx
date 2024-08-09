import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import './styles/global.scss';

import App from '@/App'
import { store } from '@/store';
import { ThemeProvider } from '@/components/shader/theme/theme-provider';
import { TailwindIndicator } from './components/shader/tailwind-indicator';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="app-ui-theme">
      <Provider store={store}>
        <App />

        <TailwindIndicator />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
