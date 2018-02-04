import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import NewRoom from './components/NewRoom'
import Room from './components/Room'
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
        <Provider store={ store }>
            <Room room={ room_data } />
        </Provider>,
        document.getElementById('room')
    );

    var roomData = document.getElementById("room_data");
    if( roomData ) {
        store.dispatch({type: "ROOM_INIT", room: JSON.parse(roomData.value)});
    }
    
}