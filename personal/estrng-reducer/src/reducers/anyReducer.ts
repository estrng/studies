export const anyReducer = (state = { login: "" }, action: { type: "SET_DATA"; login: any }) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        ...action.login,
      };
    default:
      return state;
  }
};
