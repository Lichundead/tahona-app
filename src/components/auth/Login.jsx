import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [error, setError] = useState("");

  const manejarIngreso = () => {
    if (!usuario || !password) {
      setError("Por favor completa los campos");
      return;
    }

    if (usuario === "maria71" && password === "12345") {
      setError("");
      onLogin();
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">INICIAR SESIÓN</h2>

        <div className="input-group">
          <label>Usuario</label>
          <input
            type="text"
            placeholder=""
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label>Contraseña</label>
          <div className="password-wrapper">
            <input
              type={mostrarPassword ? "text" : "password"}
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <button
              className="btn-view"
              onClick={() => setMostrarPassword(!mostrarPassword)}
            >
              {mostrarPassword ? "Ocultar" : "Ver"}
            </button>
          </div>
        </div>

        {error && <p className="error-msg">{error}</p>}

        <button className="btn-primary" onClick={manejarIngreso}>
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default Login;
