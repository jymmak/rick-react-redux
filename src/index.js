import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reducer from './reducer/characteresReducer'
import { Provider } from 'react-redux'
import { getCharacters } from './action/charactersActions'


reducer.dispatch(getCharacters())

ReactDOM.render(
    <Provider store={reducer}>
        <App />
    </Provider>, 
    document.getElementById('root')
)

serviceWorker.unregister()
