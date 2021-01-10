import client from "../services/client";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  me: (_params) => client({ method: "get", url: "users/buraksmn" }),
  login: (data) => client({ data, method: "post", url: "/auth/login" }),
};
