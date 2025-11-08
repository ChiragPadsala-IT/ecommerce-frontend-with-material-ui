const { userAction } = require("../constant/user");

const initialState = {
  isLogin: false,
  email: "",
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userAction.LOGIN:
    case userAction.IS_LOGIN:
      return { ...state, isLogin: true, email: action.data.user.email };

    case userAction.ERROR:
      return { ...state, isLogin: false, email: "", error: action.data };
    default:
      return state;
  }
};
