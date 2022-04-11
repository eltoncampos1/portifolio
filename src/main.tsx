import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GLobalStyles } from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <GLobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
