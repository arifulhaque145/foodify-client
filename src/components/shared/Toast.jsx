import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

export default function Toast({
  message,
  type = "success",
  duration = 3000,
  onClose,
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed top-4 right-4 w-64 z-50 bg-slate-200 shadow-lg">
      <div className="py-2 px-4 text-black">
        <span className="text-xl font-thin">{message}</span>
      </div>
      <motion.div
        className="h-1 bg-amber-800 mt-1 rounded"
        initial={{ width: "100%" }}
        animate={{ width: 0 }}
        transition={{ duration: duration / 1000, ease: "linear" }}
      ></motion.div>
    </div>
  );
}

/**
 * ${
          type === "success"
            ? "alert-success"
            : type === "error"
            ? "alert-error"
            : "alert-info"
        }
 */
