//Los hooks se nombran con use al principio
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { register as registerRequest} from "../../services/api"
import toast from "react-hot-toast"

export const useRegister = () => {
    const [ isLoading, setIsLoading ] = useState(false)
    const navigate = useNavigate()

    const register = async (email, password, username) => {
        //Cuando entre a la funcion se cambia el estado de isLoading a true para hacer saber que se esta usando
        setIsLoading(true)
        const response = await registerRequest({email, password, username})
        setIsLoading(false)
        if (response.error) {
            toast.error(response.e?.response?.data || "Error al registrar la cuenta.")
        }else{
            toast.success(response.data.msg)

        }
        //userDetails es un objeto que se recibe de la API
        const { userDetails } = response.data

        //LocalStorage es un objeto que se usa para guardar datos en el navegador
        //Con JSON.stringify convertimos el objeto a una cadena de texo para poder guardarlo en el localStorage
        localStorage.setItem("user", JSON.stringify(userDetails))
        navigate("/")
        
    }

    return {
        register,
        isLoading
    }
}