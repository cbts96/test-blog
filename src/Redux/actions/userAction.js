import { manageUserService } from "./../../services/manageUserService";
import { GET_INFO } from "./Type/UserType";

export const getUserAction = (info) => {
  return async (dispatch) => {
    try {
      const result = await manageUserService.login(info);
      dispatch({ type: GET_INFO, user: result.data });
      
    } catch (err) {
      console.log("Err", err);
    }
  };
};
export const logOutAction = (info) => {
  return async (dispatch) => {
    try {
      const result = await manageUserService.logout;
      dispatch({ type: GET_INFO, user: result.data });
      
    } catch (err) {
      console.log("Err", err);
    }
  };
};
