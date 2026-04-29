import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/918483833253"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '2rem',
        width: '65px',
        height: '65px',
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
        zIndex: 100,
        color: 'white',
        border: '2px solid rgba(255,255,255,0.2)'
      }}
    >
      <MessageCircle size={36} />
      {/* Pulse effect */}
      <span style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: '#25D366',
        zIndex: -1,
        animation: 'pulse-whatsapp 2s infinite'
      }}></span>
      <style>{`
        @keyframes pulse-whatsapp {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </motion.a>
  );
};

export default FloatingWhatsApp;
