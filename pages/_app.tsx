import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import "./_app.css";
import store from '../store';
import { GlobalStyle, theme } from '../style';


const App = ({ Component, pageProps }: AppProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {isMounted && <Component {...pageProps} />}
      </ThemeProvider>
    </Provider>
  );
}

export default App;