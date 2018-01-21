import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import NewRoom from './components/NewRoom'
import store from './store'

if(document.getElementById('newRoom')){
  render(
      <Provider store={store}>
          <NewRoom />
      </Provider>,
      document.getElementById('newRoom')
  );
}

if(document.getElementById('room')){
    render(
        <Provider store={store}>
            <Room />
        </Provider>,
        document.getElementById('room')
    );
}