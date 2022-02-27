import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles'
import Header from '../components/Header/Header';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        
        
        <Component {...pageProps} />
        
      </ThemeProvider>
    </>
  )

}

export default MyApp
