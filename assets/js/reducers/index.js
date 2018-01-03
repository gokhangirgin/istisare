import { combineReducers } from 'redux'
import { reducer as form  } from 'redux-form';
//import reducers
import roomReducer from './RoomReducer'

const rootReducer = combineReducers({
  roomReducer,
  form
})

export default rootReducer;
