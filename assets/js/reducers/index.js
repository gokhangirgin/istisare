import { combineReducers } from 'redux'
import { reducer as form  } from 'redux-form';
//import reducers
import newRoomReducer from './NewRoomReducer'

const rootReducer = combineReducers({
  newRoomReducer,
  form
})

export default rootReducer;
