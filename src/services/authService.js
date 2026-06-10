// Autenticación simulada. Sustituir por una llamada a la API cuando exista backend.
const DEMO_USER = {
  usuario: "maria71",
  password: "12345",
  nombre: "María Ricaurte",
};

export function authenticate(usuario, password) {
  if (!usuario || !password) {
    return { ok: false, error: "Por favor completa los campos" };
  }

  if (usuario === DEMO_USER.usuario && password === DEMO_USER.password) {
    return {
      ok: true,
      user: { usuario: DEMO_USER.usuario, nombre: DEMO_USER.nombre },
    };
  }

  return { ok: false, error: "Usuario o contraseña incorrectos" };
}
