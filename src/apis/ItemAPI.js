import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
  headers: authHeader(),
};

const itemsAPI = {
  items() {
    return {
      fetchAll: () => axios.get(baseUrl + "/api/item"),
      fetchById: (id) => axios.get(baseUrl + "/api/item/" + id, config),
      create: (newItem) => axios.post(baseUrl + "/api/item", newItem, config),
      update: (updateItem) =>
        axios.put(baseUrl + "/api/item", updateItem, config),
      delete: (id) => axios.delete(baseUrl + "/api/item/" + id, config),
    };
  },
};
export default itemsAPI;
