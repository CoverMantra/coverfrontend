
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingMessage() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const checkAndShow = () => {
      const lastShown = localStorage.getItem("chatbot_intro_timestamp");
      const oneMinute = 1000 * 60 * 60; 
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
 const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
  };
return (
    <div className="fixed bottom-[100px] right-4 z-[9999] flex flex-col items-end space-y-2">
      <AnimatePresence>
        {isVisible && (
          <>
           <motion.div
              key="message1"
              className="bg-green-50 p-2 px-4 border-2 rounded-xl rounded-br-none shadow-md text-sm text-gray-800"
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              Hi!! I am REXA
            </motion.div>

            {showSecond && (
              <motion.div
                key="message2"
                className="bg-green-50 p-2 px-4 border-2 rounded-xl rounded-br-none shadow-md text-sm text-gray-800"
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                How can I help you?
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
