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
if(document.getElementById('roomPage')){
  render(
    <Provider store={store}>
      <RoomPage />
    </Provider>,
    document.getElementById('roomPage')
  );
}