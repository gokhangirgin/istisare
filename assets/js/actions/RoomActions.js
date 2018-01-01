import api from '../api'

export function roomProcess(resp){
  const body = resp.body;
  switch (resp.status) {
    case 201:
       return {type: "ROOM_CREATED", room: body.room}
      break;
    case 226:
       return {type: "ROOM_EXISTS", room: body.room}
    default:
       return {type: "ROOM_IS_NOT_CREATED", room: body.room}
  }
}

export function createRoom(room) {
  return function (dispatch){
    return api.post("/create", room)
    .then((resp) => {
      dispatch(roomProcess(resp));
    });
  }
}
