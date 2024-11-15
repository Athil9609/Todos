import axios from "axios";

export const createPostPlaceholder = async (data) => {
  return await axios.post("https://jsonplaceholder.typicode.com/todos", data);
};
export const createPostjson = async (data) => {
  return await axios.post("http://localhost:3000/Todos", data);
};

export const updatePlaceholder = async (id,data) => {
    return await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, data);
  };
  export const updatejsonServer = async (id,data) => {
    return await axios.put(`http://localhost:3000/Todos/${id}`, data);
  };
  
  
  export const deletePlaceholder = async (id) => {
    return await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  };
  export const deletejsonServer = async (id) => {
    return await axios.delete(`http://localhost:3000/Todos/${id}`);
  };