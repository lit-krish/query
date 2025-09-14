import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import { legacy_createStore as createStore } from 'redux';
import reducer from "../reducers/index.jsx"

const store=createStore(reducer)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App /> 
    </Provider>
  </StrictMode>,
)
