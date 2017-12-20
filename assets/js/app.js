import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import CreateRoom from './components/CreateRoom'
let store = createStore(rootReducer)
render(
    <Provider store={store}>
        <CreateRoom />
    </Provider>,
    document.getElementById('createRoom')
)
