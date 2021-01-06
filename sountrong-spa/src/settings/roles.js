import { ListItemSecondaryAction } from "@material-ui/core";

const rolesEnum = Object.freeze({ user: 1, admin: 2, anon: 3 });

export const role = {
  canEdit(role) {
    return role !== rolesEnum.anon;
  },
  isAnon(role) {
    return role === rolesEnum.anon;
  },
  isUser(role) {
    return role === rolesEnum.user;
  },
  isAdmin(role) {
    return role === rolesEnum.admin;
  },
};

export default rolesEnum;
