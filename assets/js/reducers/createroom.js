const initialState = {
  submitting: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "NEW_ROOM_REQUESTED":
      console.log("NEW_ROOM_REQUESTED");
      return {
        ...state,
        submitting: true
      };
    case "ROOM_CREATED":
      return {
        ...state,
        submitting: false
      };
    case "ROOM_EXISTS":
      return {
        ...state,
        submitting: false
      };
    default:
      return state;
  }
}
