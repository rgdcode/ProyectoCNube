export default async function requestBuscar(cedula) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/personas/${cedula}`)
  
    return res
  
  
  }