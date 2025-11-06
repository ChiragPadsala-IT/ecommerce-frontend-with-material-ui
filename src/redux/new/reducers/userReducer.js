const { userAction } = require("../constant/user");

const initialState = {
  isLogin: false,
  email: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userAction.LOGIN:
      return { ...state, isLogin: true, email: action.data.user.email };

    default:
      return state;
  }
};
