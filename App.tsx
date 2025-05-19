import { ThemeProvider } from "./src/Hooks/ThemeContext";
import { AppRoutes } from "./src/Routes/app.routes";
import React from "react";

export default function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}
