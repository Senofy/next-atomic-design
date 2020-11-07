import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import "./_app.css";
import store from '../store';
import { GlobalStyle, defaultTheme } from '../style';
// import GlobalStyle from '../globalStyles'
// import theme from '../themes/default';


const App = ({ Component, pageProps }: AppProps) => {

  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;