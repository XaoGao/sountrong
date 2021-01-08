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
  getSinger(singerId) {
    return instanseWithoutToken()
      .get(`singers/${singerId}`)
      .then((response) => {
        return response;
      });
  },
  createSinger(singerData) {
    return instanse()
      .post("singers", singerData)
      .then((response) => {
        return response;
      });
  },
  updateSinger(singerId, singerData) {
    return instanse()
      .put(`singers/${singerId}`, singerData)
      .then((response) => {
        return response;
      });
  },
};
export const albumsApi = {
  getAlbum(albumId) {
    return instanseWithoutToken()
      .get(`albums/${albumId}`)
      .then((response) => {
        return response;
      });
  },
  updateAlbum(albumId, formData) {
    return instanse()
      .put(`albums/${albumId}`, formData)
      .then((response) => {
        return response;
      });
  },
  createAlbum(formData) {
    return instanse()
      .post(`albums`, formData)
      .then((response) => {
        return response;
      })
  }
};
