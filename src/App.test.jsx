import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  test("muestra la pantalla de login al inicio", () => {
    render(<App />);
    expect(screen.getByText(/iniciar sesión/i)).toBeInTheDocument();
  });

  test("muestra un error con credenciales incorrectas", async () => {
    render(<App />);
    await userEvent.type(screen.getByLabelText(/usuario/i), "otra");
    await userEvent.type(screen.getByLabelText(/contraseña/i), "incorrecta");
    await userEvent.click(screen.getByRole("button", { name: /^ingresar$/i }));

    expect(
      screen.getByText(/usuario o contraseña incorrectos/i)
    ).toBeInTheDocument();
  });

  test("entra al dashboard con credenciales válidas", async () => {
    render(<App />);
    await userEvent.type(screen.getByLabelText(/usuario/i), "maria71");
    await userEvent.type(screen.getByLabelText(/contraseña/i), "12345");
    await userEvent.click(screen.getByRole("button", { name: /^ingresar$/i }));

    expect(await screen.findByText(/bienvenida maría/i)).toBeInTheDocument();
  });
});
