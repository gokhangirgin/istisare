import { combineReducers } from 'redux'
import { reducer as form  } from 'redux-form';
//import reducers
import newRoomReducer from './NewRoomReducer'
import roomReducer from './RoomReducer'

const rootReducer = combineReducers({
  newRoomReducer,
  roomReducer,
  form
})

export default rootReducer;
