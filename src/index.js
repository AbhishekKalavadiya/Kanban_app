import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store  from './store/store'
import App from './components/App'
import './index.css'

ReactDOM.render(<div className='index'>
    <Provider store={store} > 
        <App />
    </Provider></div>, 
    document.getElementById('root')
)