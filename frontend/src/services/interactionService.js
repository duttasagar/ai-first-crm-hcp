import api from "./api";

export const createInteraction = (data) => {
  return api.post("/interaction/", data);
};

export const getInteractions = () => {
  return api.get("/interaction/");
};

export const getInteraction = (id) => {
  return api.get(`/interaction/${id}`);
};

export const updateInteraction = (id, data) => {
  return api.put(`/interaction/${id}`, data);
};

export const deleteInteraction = (id) => {
  return api.delete(`/interaction/${id}`);
};