export default async function requestEliminar(cedula) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/personas/${cedula}`, {
    method: 'DELETE',
  });

  return res;
}
