import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  // Estados para guardar lo que escribe el usuario
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [error, setError] = useState("");

  const manejarIngreso = () => {
    // Lógica de validación (Password funcional)
    if (usuario === "maria112" && password === "12345") {
      onLogin(); // Llama a la función que nos deja entrar
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>INICIAR SESIÓN</h2>

        <label>Usuario</label>
        <input
          type="text"
          placeholder=""
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <label>Contraseña</label>
        <div className="password-wrapper">
          <input
            // Aquí cambiamos el tipo dinámicamente
            type={mostrarPassword ? "text" : "password"}
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="btn-view"
            onClick={() => setMostrarPassword(!mostrarPassword)}
          >
            {mostrarPassword ? "Ocultar" : "Ver"}
          </button>
        </div>

        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

        <button className="btn-primary" onClick={manejarIngreso}>
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default Login;
