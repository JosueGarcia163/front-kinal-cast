//axios una libreria de peticiones http.
import axios from "axios";
import { logout } from "../shared/hooks/useLogout";

//Las consultas a la base de datos se hacen unicamente en api.
const apiClient = axios.create({
    //
    baseURL: "http://localhost:3001/kinalCast/v2",
    timeout: 5000,
    //Esto lo hacemos por que http va a ser local y no publica.
    httpsAgent: false
})

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (e) => {
    return Promise.reject(e);
  }
);

export const register = async (data) => {
    try {
        return await apiClient.post("/auth/register", data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const login = async (data) => {
    try{
        return await apiClient.post("/auth/login", data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getChannels = async () => {
  try {
    return await apiClient.get("/channels");
  } catch (e) {
    return {
      error: true,
      e: e,
    };
  }
};

export const getFollowedChannels = async () => {
  try{
    return await apiClient.get('/channels/followed')
  }catch(e){
    checkResponseStatus(e)
    return{
      error: true,
      e: e
    }
  }
}

const checkResponseStatus = (e) => {
  const responseStatus = e?.response?.status

  if(responseStatus){
    (responseStatus === 401 || responseStatus === 403) && logout()
  }
}