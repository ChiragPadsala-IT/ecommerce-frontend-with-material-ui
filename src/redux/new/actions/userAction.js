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

    console.log(data);
    if (data.success) {
      dispatch({ type: userAction.LOGIN, data: data });
    }
  } catch (error) {
    console.log(error);
  }
};
