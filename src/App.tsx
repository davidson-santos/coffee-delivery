import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      {/* <Home /> */}
      <Checkout />
    </ThemeProvider>
  )
}

