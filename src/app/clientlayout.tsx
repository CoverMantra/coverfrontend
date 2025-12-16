"use client";

import { ModalProvider } from "./context/modelcontext";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import GlobalModal from "./Components/globalmodel";
import ChatBot from "./Components/chatbot";

export default function ClientLayout({ children }: { children: React.ReactNode }) {

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
