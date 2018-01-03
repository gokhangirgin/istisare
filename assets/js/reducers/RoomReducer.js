const initialState = {
  room: {},
  isSubmitting: false,
  isProtected: false,
  isCreated: false,
  isExists: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ROOM_NEW_REQUEST" :
      return Object.assign({}, state, {
        isSubmitting: true
      });
    case "ROOM_CREATED":
      return Object.assign({}, state, {
        isCreated: true, isSubmitting: false, room: action.room
      });
    case "ROOM_EXISTS":
      return Object.assign({}, state, {
        isExists: true, isSubmitting: false, room: action.room
      });
      break;
    case "ROOM_IS_NOT_CREATED":
      return Object.assign({}, state, {
        isExists: true, isSubmitting: false, room: action.room
      });
    default:
      return Object.assign({}, state, {
        isSubmitting: false
      });
  }
}
