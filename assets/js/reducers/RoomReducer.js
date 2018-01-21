import { initialRoomState } from '../state'

export default (state = initialRoomState, action) => {
  switch (action.type) {
    case "ROOM_JOIN" :
      return state;
    default:
      return state;
  }
  return state;
}
