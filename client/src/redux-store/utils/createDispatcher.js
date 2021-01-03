const createDispatcher = (actionType, actionData) => {
  debugger;
  if (typeof actionType !== "string") {
    throw new Error("Expected actionType to be string.");
  }
  return {
    type: actionType,
    payload: actionData,
  };
};
export default createDispatcher;
