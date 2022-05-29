import React, { memo } from 'react'
import { Helmet } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import Router from 'app'

const App = memo(() => {
    return (
        <BrowserRouter>
            <Helmet defaultTitle={ process.env.REACT_APP_NAME }>
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <meta name="theme-color" content="#f8f9fb" />
                <meta property="og:title" content={ process.env.REACT_APP_NAME } />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="/" />
                <meta property="og:image" content="/" />
            </Helmet>
            <Router />
        </BrowserRouter>
    )
})

export default App