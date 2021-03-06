import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import { AuthProvider } from './state/auth'
import App from './App'
import './index.css'

import { indigo } from '@material-ui/core/colors'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#26a69a',
    },
    secondary: {
      main: indigo[900],
    }
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>  
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
