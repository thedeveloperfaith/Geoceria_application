import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppProvider from './Context/AppProvider.jsx'
// import { Provider } from 'react-redux'
import { Provider } from 'react-redux'

import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppProvider>
         <App />
      </AppProvider>
    </Provider>
  </StrictMode>,
)
