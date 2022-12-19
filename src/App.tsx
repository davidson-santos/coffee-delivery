import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import background from './assets/background-blur.svg'
import { Header } from './components/Header'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      {/* <img src={background} alt="" />
      <h1>Novo app cofee delivery</h1>  */}
    </ThemeProvider>
  )
}

