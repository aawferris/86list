import api from "./apiConfig";

export const getAllRestaurants = async () => {
  const resp = await api.get("/restaurants");
  return resp.data;
};

export const getOneRestaurant = async (id) => {
  const resp = await api.get(`/restaurants/${id}`);
  return resp.data;
};

export const postRestaurant = async (restaurantData) => {
  const resp = await api.post("/restaurants", { restaurant: restaurantData });
  return resp.data;
};

export const putRestaurant = async (id, restaurantData) => {
  const resp = await api.put(`/restaurants/${id}`, {
    restaurant: restaurantData,
  });
  return resp.data;
};

export const destroyRestaurant = async (id) => {
  const resp = await api.delete(`/restaurants/${id}`);
  return resp;
};
