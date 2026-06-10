import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { DEFAULT_VIEW } from "../constants/views";

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const [view, setView] = useState(DEFAULT_VIEW);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useCallback((nextView) => {
    setView(nextView);
    setIsSidebarOpen(false);
  }, []);

  const openSidebar = useCallback(() => setIsSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

  const value = useMemo(
    () => ({ view, navigate, isSidebarOpen, openSidebar, closeSidebar }),
    [view, navigate, isSidebarOpen, openSidebar, closeSidebar]
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation debe usarse dentro de <NavigationProvider>");
  }
  return context;
}
