import { Suspense } from "react";
import "./App.css";

import { AuthProvider, useAuth } from "./context/AuthContext";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import { DEFAULT_VIEW } from "./constants/views";
import { VIEW_COMPONENTS } from "./views";
import Login from "./components/auth/Login";
import Sidebar from "./components/layout/Sidebar";

function AppLayout() {
  const { view } = useNavigation();
  const CurrentView = VIEW_COMPONENTS[view] ?? VIEW_COMPONENTS[DEFAULT_VIEW];

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Suspense fallback={<div className="view-loader">Cargando…</div>}>
          <CurrentView />
        </Suspense>
      </main>
    </div>
  );
}

function AppContent() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  // NavigationProvider se monta al iniciar sesión, así la navegación
  // se reinicia (vista por defecto, sidebar cerrado) en cada sesión.
  return (
    <NavigationProvider>
      <AppLayout />
    </NavigationProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
