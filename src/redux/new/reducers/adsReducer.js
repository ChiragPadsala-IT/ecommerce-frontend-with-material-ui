import { AdsAction } from "../constant/ads";

const initialState = {
  homeBanner: [],
};

export const adsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AdsAction.GET_HOME_BANNER_IMAGE:
      return { ...state, homeBanner: action.data };
    default:
      return state;
  }
};
