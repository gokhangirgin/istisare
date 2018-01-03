import api from '../api'

export function roomProcess(resp){
  const body = resp.body;
  switch (resp.status) {
    case 201:
       return {type: "ROOM_CREATED", room: body}
      break;
    case 226:
       return {type: "ROOM_EXISTS", room: body.room}
    default:
       return {type: "ROOM_IS_NOT_CREATED", room: body.room}
  }
}

export function createRoom(room) {
  return function (dispatch){

    dispatch({type: "ROOM_NEW_REQUEST"});

    return api.post("/create", room)
    .then((resp) => {
      dispatch(roomProcess(resp));
    });
  }
}
