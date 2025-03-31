import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services";
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    //Sirve para manejar la navegacion osea manejar la navegacion entre rutas.
    const navigate = useNavigate()


    const login = async (email, password) => {
        //setIsLoading nos sirve para indicar si el inicio de sesion esta en curso en este caso en true.
        setIsLoading(true)

        //Hacemos la peticion al servidor por medio de loginRequest, pasando los parametros email y password.
        const response = await loginRequest({
            email,
            password
        })

        //Cuando terminamos marcamos como terminado el proceso de carga.
        //Esto es para que el usuario no pueda hacer click en el boton de login mientras se esta cargando la peticion.
        setIsLoading(false)

        //Si la respuesta tiene un error, mostramos el error en un toast.
        if(response.error){
            toast.error(response.e?.response?.data || "Error al iniciar sesión")
        }else{
            //Si la respuesta no tiene error, mostramos un mensaje de exito en un toast.
            toast.success(response.data.msg)
        }

        //Si la respuesta no tiene error, extraemos el token y lo guardamos en el localStorage y navegamos a la ruta principal.
        const { token } = response.data.userDetails

        //Lo guardamos en el localStorage para guardarlo y que no se pierda al refrescar la pagina.
        localStorage.setItem("token", token)

        //Redirigimos al usuario a el dashboard.
        navigate("/")
    }

    //Retornamos la funcion de inicio se sesion y el estado que indica el inicio de sesion en curso.
    return{
        login,
        isLoading
    }
}