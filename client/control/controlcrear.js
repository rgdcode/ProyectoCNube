import React from "react"
import requestCrear from "@/modelo/requestcrear";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default async function controlCrear(cedula,nombre,apellido) {

  try {
    const respuesta = await requestCrear(cedula,nombre,apellido)
    if (respuesta.status === 200) {

      toast("creado")

    }else if (respuesta.status === 201) {

      toast("creado")

    }else if (respuesta.status === 404) {
        toast("hubo un error intente de nuevo")
      } else {


      toast("hubo un error intente de nuevo")
    }
  }
  catch (error) {
    toast("hubo un error intente de nuevo")

  }

  <ToastContainer
    position="top-center"
    autoClose={7000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
}