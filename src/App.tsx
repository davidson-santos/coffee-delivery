import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { OrderFinished } from './pages/OrderFinished'
import {BrowserRouter} from 'react-router-dom'
import { Router } from './Router'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

