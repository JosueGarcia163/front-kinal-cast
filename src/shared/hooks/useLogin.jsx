import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services";
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const login = async (email, password) => {
        setIsLoading(true)

        const response = await loginRequest({
            email,
            password
        })

        setIsLoading(false)

        if(response.error){
            toast.error(response.e?.response?.data || "Error al iniciar sesión")
        }else{
            toast.success(response.data.msg)
        }

        const { token } = response.data.userDetails

        localStorage.setItem("token", token)

        navigate("/")
    }

    return{
        login,
        isLoading
    }
}