import client from "../services/client";

export default {
  me: (params) => client({ method: "get", url: "users/buraksmn" }),
};
