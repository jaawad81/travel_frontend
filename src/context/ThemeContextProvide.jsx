import { useState } from "react";
import { ContextProvider } from "./theme";

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState(false);
  return (
    <ContextProvider value={{ mode, setMode }}>{children}</ContextProvider>
  );
}
