const initialState = "";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":  
        return action.user;
    default:
        return state;
  }
};
