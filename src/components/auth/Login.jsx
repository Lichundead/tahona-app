import { useState } from "react";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = login(usuario, password);
    setError(result.ok ? "" : result.error);
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-title">INICIAR SESIÓN</h2>

        <div className="input-group">
          <label htmlFor="usuario">Usuario</label>
          <input
            id="usuario"
            type="text"
            autoComplete="username"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <div className="password-wrapper">
            <input
              id="password"
              type={mostrarPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <button
              type="button"
              className="btn-view"
              onClick={() => setMostrarPassword((visible) => !visible)}
            >
              {mostrarPassword ? "Ocultar" : "Ver"}
            </button>
          </div>
        </div>

        {error && <p className="error-msg">{error}</p>}

        <button type="submit" className="btn-primary">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
