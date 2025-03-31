import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes.jsx";
import { Toaster } from "react-hot-toast";

export const App = () => {
  //Aqui generamos las rutas de la aplicacion segun la configuracion routes.
  let element = useRoutes(routes);
  //Renderizamos el elemento de la ruta y tambien configuramos donde se mostraran los toasts.
  return (
    <>
      {element}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}
