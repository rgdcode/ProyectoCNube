export default async function requestModificar(ced, nom, ape) {
  const persona = {
    cedula: ced,
    nombre: nom,
    apellido: ape,
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/personas/${ced}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(persona),
  });

  return res;
}
