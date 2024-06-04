import { useContext } from "react";
import { DrawerContext } from "../Context/DrawerContext";

export default function UseDrawerContext() {
  const context = useContext(DrawerContext);

  if (context === undefined) {
    throw new Error("Não está dentro do contexto");
  }

  return context;
}
