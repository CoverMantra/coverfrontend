"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

import { ModalProvider } from "./context/modelcontext";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { useAuthStore } from "../store/useAuthStore";

const GlobalModal = dynamic(
  () => import("./Components/globalmodel"),
  { ssr: false }
);

const ChatBot = dynamic(
  () => import("./Components/chatbot"),
  { ssr: false }
);

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // Auth Check
  useEffect(() => {
    useAuthStore.getState().checkAuth();
  }, []);

  // Anti Copy / Inspect Protection
  useEffect(() => {

    const disableInspect = (
      e: KeyboardEvent
    ) => {

      const key =
        e.key?.toLowerCase?.() || "";

      // F12
      if (key === "f12") {
        e.preventDefault();
      }

      // Ctrl + Shift + I/J/C
      if (
        e.ctrlKey &&
        e.shiftKey &&
        ["i", "j", "c"].includes(key)
      ) {
        e.preventDefault();
      }

      // Ctrl + U
      if (e.ctrlKey && key === "u") {
        e.preventDefault();
      }
    };

    // Disable Right Click
    const disableRightClick = (
      e: MouseEvent
    ) => {
      e.preventDefault();
    };

    // Disable Copy
    const disableCopy = (
      e: ClipboardEvent
    ) => {
      e.preventDefault();

      e.clipboardData?.setData(
        "text/plain",
        "Itna pasand aaya? Dil me rakho ❤️ clipboard me nahi!"
      );
    };

    // Disable Text Selection
    const disableSelection = (
      e: Event
    ) => {
      e.preventDefault();
    };

    // Disable Drag
    const disableDrag = (
      e: DragEvent
    ) => {
      e.preventDefault();
    };

    // Add Events
    document.addEventListener(
      "keydown",
      disableInspect
    );

    document.addEventListener(
      "contextmenu",
      disableRightClick
    );

    document.addEventListener(
      "copy",
      disableCopy
    );

    document.addEventListener(
      "selectstart",
      disableSelection
    );

    document.addEventListener(
      "dragstart",
      disableDrag
    );

    // Cleanup
    return () => {
      document.removeEventListener(
        "keydown",
        disableInspect
      );

      document.removeEventListener(
        "contextmenu",
        disableRightClick
      );

      document.removeEventListener(
        "copy",
        disableCopy
      );

      document.removeEventListener(
        "selectstart",
        disableSelection
      );

      document.removeEventListener(
        "dragstart",
        disableDrag
      );
    };

  }, []);

  return (
    <ModalProvider>

      <div className="relative min-h-screen select-none">

        <Navbar />

        <main>
          {children}
        </main>

        <GlobalModal />

        <ChatBot />

        <Footer />

      </div>

      <style jsx global>{`
        html,
        body {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        img {
          pointer-events: none;
          -webkit-user-drag: none;
        }

        ::selection {
          background: transparent;
        }
      `}</style>

    </ModalProvider>
  );
}
// "use client";

// import { useEffect } from "react";
// import { ModalProvider } from "./context/modelcontext";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import dynamic from 'next/dynamic';

// const GlobalModal = dynamic(() => import("./Components/globalmodel"), { ssr: false });
// const ChatBot = dynamic(() => import("./Components/chatbot"), { ssr: false });
// import { useAuthStore } from "../store/useAuthStore";

// export default function ClientLayout({ children }: { children: React.ReactNode }) {
//   useEffect(() => {
//     useAuthStore.getState().checkAuth();
//   }, []);
//   useEffect(() => {
//     const disableInspect = (e: KeyboardEvent) => {
//       const keyStr = (e?.key && typeof e.key === "string") ? e.key.toLowerCase() : "";
//       if (
//         e?.key === "F12" ||
//         (e?.ctrlKey && e?.shiftKey && ["i", "j", "c", "u"].includes(keyStr)) ||
//         (e?.ctrlKey && keyStr === "u")
//       ) {
//         e.preventDefault();
//       }
//     };

//     const disableRightClick = (e: MouseEvent) => {
//       e.preventDefault();
//     };

//     const disableCopy = (e: ClipboardEvent) => {
//       e.preventDefault();
//       if (e.clipboardData) {
//         e.clipboardData.setData("text/plain", "Itna pasand aaya? Dil me rakho ❤️ clipboard me nahi!");
//       }
//     };

//     document.addEventListener("keydown", disableInspect);
//     document.addEventListener("contextmenu", disableRightClick);
//     document.addEventListener("copy", disableCopy);

//     return () => {
//       document.removeEventListener("keydown", disableInspect);
//       document.removeEventListener("contextmenu", disableRightClick);
//       document.removeEventListener("copy", disableCopy);
//     };
//   }, []);

//   return (
//     <ModalProvider>
//       <Navbar />
//       {children}
//       <GlobalModal />
//       <ChatBot/>
//       <Footer />
//     </ModalProvider>
//   );
// }
