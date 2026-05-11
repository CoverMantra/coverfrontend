"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function FloatingMessage() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const checkAndShow = () => {
      const lastShown = localStorage.getItem("chatbot_intro_timestamp");
      const oneMinute = 1000 * 60 * 60; // Logic preserved: one hour (despite variable name)
      const now = Date.now();

      if (!lastShown || now - Number(lastShown) > oneMinute) {
        setIsVisible(true);

        const secondTimer = setTimeout(() => {
          setShowSecond(true);
        }, 2000);

        const hideTimer = setTimeout(() => {
          setIsVisible(false);
          setShowSecond(false);
          localStorage.setItem("chatbot_intro_timestamp", now.toString());
        }, 10000);

        return () => {
          clearTimeout(secondTimer);
          clearTimeout(hideTimer);
        };
      }
    };
    
    checkAndShow();
    const interval = setInterval(checkAndShow, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const messageVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.9, transformOrigin: "bottom right" },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 25 } },
    exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <div className="fixed bottom-[100px] right-6 z-[9999] flex flex-col items-end space-y-3 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              key="message1"
              className="relative flex items-center gap-3 bg-[#08101E]/90 backdrop-blur-md p-3 pr-5 border border-white/10 rounded-2xl rounded-br-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-inner p-1">
                 <img src="/image/logo.png" alt="REXA" className="w-full h-full object-contain" />
              </div>
              <span className="text-sm font-semibold text-white tracking-wide">
                Hi!! I am CoverMantra AI
              </span>
              
              {/* Little triangle tail */}
              <div className="absolute -bottom-2 right-4 w-4 h-4 bg-[#08101E]/90 border-b border-r border-white/10 transform rotate-45 backdrop-blur-md"></div>
            </motion.div>

            {showSecond && (
              <motion.div
                key="message2"
                className="relative bg-gradient-to-r from-[#FF7819] to-[#e66a15] px-5 py-3 rounded-2xl rounded-tr-sm shadow-[0_10px_20px_-5px_rgba(255,120,25,0.5)]"
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <span className="text-sm font-bold text-white tracking-wide">
                  How can I help you today?
                </span>
                
                {/* Little triangle tail */}
                <div className="absolute -top-1.5 right-4 w-3 h-3 bg-[#e66a15] transform rotate-45"></div>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
