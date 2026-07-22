"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

export default function Toast({ message, visible, onClose }: ToastProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(onClose, 300);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible && !show) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-[100] transition-all duration-300 ${show ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
      <div className="glass-dark text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3">
        <span className="text-lg animate-cart-bounce">🛒</span>
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}
