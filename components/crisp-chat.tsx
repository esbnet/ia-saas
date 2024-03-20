import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export function CrispChat() {
  useEffect(() => {
    Crisp.configure("a888eef6-1664-443f-877e-d7507c169ed9");
  }, []);

  return null;
}
