import { AdsApi } from "../../../Api/ads";
import { AdsAction } from "../constant/ads";

export const getHomeBannerImage = () => async (dispatch) => {
  try {
    const res = await fetch(AdsApi.getHomeBannerImage);

    const data = await res.json();

    if (data.success) {
      dispatch({
        type: AdsAction.GET_HOME_BANNER_IMAGE,
        data: data.homeGallery.images,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
