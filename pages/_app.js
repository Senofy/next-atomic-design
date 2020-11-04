import { Fragment, useState, useEffect } from 'react';
import "./_app.css";
import GlobalStyle from '../globalStyles'
import { wrapper } from '../store'

import { ThemeProvider } from 'styled-components'
import theme from '../themes/default';

const App = ({ Component, pageProps }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    
    return (
        <Fragment>
            <GlobalStyle />
            <ThemeProvider theme = {theme}>
                {isMounted && <Component {...pageProps} />}
            </ThemeProvider>
        </Fragment>
    );
}

export default wrapper.withRedux(App)