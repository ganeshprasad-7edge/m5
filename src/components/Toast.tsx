import { useEffect } from 'react';
import successIcon from '/check-circle.png';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  show: boolean;
  onClose: () => void;
}

export default function Toast({ message, type, show, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const bgColor = type === 'success' ? 'bg-[#EBFFF1]' : 'bg-[#F76659]';

  return (
    <div 
      className={`fixed top-4 right-4 ${bgColor} text-black px-6 py-3 rounded-md shadow-lg z-50 animate-toast-right flex items-center min-w-[250px] justify-center`}
    >
      {type === 'success' ? (
        <img src={successIcon} alt="Success" className="w-5 h-5 text-[#EBFFF1] bg-[#EBFFF1]" />
      ) : (
        <span className="text-[#22C348] text-2xl">
          ✕
        </span>
      )}
      <span className="mx-2">{message}</span>
      <button 
        onClick={onClose}
        className="ml-auto text-[#22C348] text-4xl hover:text-gray-200 focus:outline-none"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}