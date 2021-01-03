import types from "../types/me";
import request from "../../services/request";
import createDispatcher from "../utils/createDispatcher";

export function getMe() {
  return (dispatch) => {
    dispatch(createDispatcher(types.GET_ME_REQUEST, {}));
    return request
      .me()
      .then((res) => {
        dispatch(createDispatcher(types.GET_ME_SUCCESS, res.data));
      })
      .catch((err) => {
        dispatch(createDispatcher(types.GET_ME_FAILURE, err));
        return err;
      });
  };
}
