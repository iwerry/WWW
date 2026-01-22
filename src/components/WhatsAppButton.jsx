import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/5561981905720"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: "spring" }}
        >
            <MessageCircle size={32} />
            <span className="tooltip">Fale com o Prof. Daniel</span>
        </motion.a>
    );
};

export default WhatsAppButton;
