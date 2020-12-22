import { instanseWithoutToken, instanse } from "./instanse-create";

export const authApi = {
  signin(username, password) {
    return instanseWithoutToken()
      .post("signin", { username, password })
      .then((response) => {
        return response;
      });
  },
  signup(username, firstName, lastName, password) {
    return instanseWithoutToken()
      .post("signup", { username, firstName, lastName, password })
      .then((response) => {
        return response;
      });
  },
  editProfile(username, firstName, lastName) {
    return instanse()
      .put("edit_profile", { username, firstName, lastName })
      .then((response) => {
        return response;
      });
  },
};
export const singersApi = {
  getSingers() {
    return instanseWithoutToken()
      .get("singers")
      .then((response) => {
        return response;
      });
  },
  getSinger(id) {
    return instanseWithoutToken()
      .get(`singers/${id}`)
      .then((response) => {
        return response;
      });
  },
};
