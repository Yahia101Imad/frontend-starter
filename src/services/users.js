import { api } from "./api";

export const usersService = {
  getAll() {
    return api.get("/users");
  },

  getById(id) {
    return api.get(`/users/${id}`);
  },
};