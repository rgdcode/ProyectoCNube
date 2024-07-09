import React from "react"
import requestBuscar from "@/modelo/requestbuscar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default async function controlBuscar(cedula) {

    try {
      const respuesta = await requestBuscar(cedula)
      if (respuesta.status === 200) {
  
        toast("encontrado cedula=",respuesta.cedula,"nombre=",respuesta.nombre,"apellido=",respuesta.apellido)
        return respuesta
  
      }if (respuesta.status === 404) {
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