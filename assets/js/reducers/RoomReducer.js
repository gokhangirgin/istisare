import { initialRoomState } from '../state'

export default (state = initialRoomState, action) => {

  switch (action.type) {
    case "ROOM_INIT" :
      console.log(action);
      return Object.assign({}, state, {room: action.room});
    case "ROOM_JOIN" :
      return state;
    default:
      return state;
  }
  return state;
}
