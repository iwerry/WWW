import React from 'react';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import './InstagramButton.css';

const InstagramButton = () => {
    return (
        <motion.a
            href="https://www.instagram.com/danielrodrigues.photography/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-float"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.2, type: "spring" }}
        >
            <Instagram size={28} />
            <span className="tooltip-insta">@danielrodrigues.photography</span>
        </motion.a>
    );
};

export default InstagramButton;
