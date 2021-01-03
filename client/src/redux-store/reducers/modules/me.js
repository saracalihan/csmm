import createReducer from "../../utils/createReducer";

import types from "../../types/me";

export default createReducer({
  mapActionToKey: (action) => action.type,
  types: [types.GET_ME_REQUEST, types.GET_ME_SUCCESS, types.GET_ME_FAILURE],
});
