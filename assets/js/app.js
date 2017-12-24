import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/index'
import CreateRoom from './components/CreateRoom'
let store = createStore(reducers)
render(
    <Provider store={store}>
        <CreateRoom />
    </Provider>,
    document.getElementById('createRoom')
)
