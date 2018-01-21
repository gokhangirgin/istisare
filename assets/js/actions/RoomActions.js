import api from '../api'
import { reset } from 'redux-form';

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

export function joinProcess(resp) {
  switch(resp.status) {
    case 200:
      return {type: "JOIN_ROOM_SUCCESS"}
    case 401:
      return {type: "JOIN_ROOM_AUTHORIZATION_FAILED"}
    default:
      return {type: "JOIN_ROOM"}
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

export function joinRoom(payload) {
  return function (dispatch) {
    return api.post("/create", payload)
    .then((resp) => {
      dispatch(joinProcess(resp));
    });
  }
}
