import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3001/kinalCast/v2",
    timeout: 5000,
    //Esto lo hacemos por que http va a ser local y no publica.
    httpAgent: false
})

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