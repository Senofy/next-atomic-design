import { Fragment, useState, useEffect } from 'react';
import GlobalStyle from '../globalStyles'
import { wrapper } from '../store'

const App = ({ Component, pageProps }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    
    return (
        <Fragment>
            <GlobalStyle />
            {isMounted && <Component {...pageProps} />}
        </Fragment>
    );
}

export default wrapper.withRedux(App)