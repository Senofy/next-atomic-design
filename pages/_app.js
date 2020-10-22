import { Fragment, useState, useEffect } from 'react';
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, lightTheme, darkTheme } from '../globalStyles'
import { wrapper } from '../store'

const App = ({ Component, pageProps }) => {
    const [isMounted, setIsMounted] = useState(false)
    const darkMode = useDarkMode(true)
    const theme = darkMode.value ? darkTheme : lightTheme

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