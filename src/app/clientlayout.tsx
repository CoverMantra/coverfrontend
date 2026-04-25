"use client";

import { useEffect } from "react";
import { ModalProvider } from "./context/modelcontext";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import GlobalModal from "./Components/globalmodel";
import ChatBot from "./Components/chatbot";
import { useAuthStore } from "../store/useAuthStore";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    useAuthStore.getState().checkAuth();
  }, []);
  useEffect(() => {
    const disableInspect = (e: KeyboardEvent) => {
      const keyStr = (e?.key && typeof e.key === "string") ? e.key.toLowerCase() : "";
      if (
        e?.key === "F12" ||
        (e?.ctrlKey && e?.shiftKey && ["i", "j", "c", "u"].includes(keyStr)) ||
        (e?.ctrlKey && keyStr === "u")
      ) {
        e.preventDefault();
      }
    };

    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
    };

    const disableCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      if (e.clipboardData) {
        e.clipboardData.setData("text/plain", "Itna pasand aaya? Dil me rakho ❤️ clipboard me nahi!");
      }
    };

    document.addEventListener("keydown", disableInspect);
    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("copy", disableCopy);

    return () => {
      document.removeEventListener("keydown", disableInspect);
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("copy", disableCopy);
    };
  }, []);

  return (
    <ModalProvider>
      <Navbar />
      {children}
      <GlobalModal />
      <ChatBot/>
      <Footer />
    </ModalProvider>
  );
}
