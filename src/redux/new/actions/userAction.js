import { UserApi } from "../../../Api/user";
import { userAction } from "../constant/user";

export const login = (userCredential) => async (dispatch) => {
  try {
    const res = await fetch(UserApi.login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userCredential),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("token", data.token);
      dispatch({ type: userAction.LOGIN, data: data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const isUserLogin = () => async (dispatch) => {
  try {
    const res = await fetch(UserApi.isLogedIn, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await res.json();

    if (data.success) {
      dispatch({ type: userAction.IS_LOGIN, data: data });
    } else {
      dispatch({ type: userAction.ERROR, data: data.messages });
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    const res = await fetch(UserApi.logout);

    const data = await res.json();

    if (data.success) {
      localStorage.removeItem("token");
      dispatch({ type: userAction.SIGN_OUT });
    }
  } catch (error) {
    console.log(error);
  }
};
