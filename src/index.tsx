import React from 'react'
import ReactDOM from 'react-dom'
import App from 'app'
import reportWebVitals from './reportWebVitals'

const root = document.getElementById('root') as HTMLElement

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    root
)

reportWebVitals(console.log)