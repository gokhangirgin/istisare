import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import NewRoom from './components/NewRoom.js'
import store from './store'


render(
    <Provider store={store}>
        <NewRoom />
    </Provider>,
    document.getElementById('newRoom')
)
