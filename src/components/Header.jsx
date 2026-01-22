import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Header.css';

const Header = ({ onStartClick }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <div className="hero-container">
            {/* Background Image Layer */}
            <div className="video-background">
                <motion.div
                    className="hero-image"
                    style={{
                        backgroundImage: 'url(/assets/DanielRodrigues/CAPA.jpg)',
                        y: y1
                    }}
                />
                <div className="video-overlay" />
            </div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1>Alfabetize seu olhar</h1>
                <p>Transforme momentos em memórias eternas.</p>

                <motion.button
                    className="cta-button"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onStartClick}
                >
                    Entrar na Sala de Aula
                </motion.button>
            </motion.div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ChevronDown size={32} />
            </motion.div>
        </div>
    );
};

export default Header;
