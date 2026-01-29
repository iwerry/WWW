import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Header.css';

const Header = ({ curriculum, onWeekSelect }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <div className="hero-container">
            {/* Elegant Top Navbar */}
            <nav className="top-nav">
                <div className="nav-logo">Prof. Daniel</div>
                <div className="nav-links">
                    {curriculum.slice(0, 2).map((week) => (
                        <button
                            key={week.id}
                            className={`nav-link-btn ${week.locked ? 'nav-locked' : ''}`}
                            onClick={() => !week.locked && onWeekSelect(week.id)}
                            disabled={week.locked}
                        >
                            Semana {week.id}
                        </button>
                    ))}

                    <div className="dropdown">
                        <button className="nav-link-btn dropdown-trigger">
                            Próximas Aulas <ChevronDown size={16} />
                        </button>
                        <div className="dropdown-content">
                            {curriculum.slice(2).map((week) => (
                                <div key={week.id} className="dropdown-item locked">
                                    <span>Semana {week.id}</span>
                                    <span className="lock-tag">BLOQUEADO</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Background Video Layer */}
            <div className="video-background">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                    poster="/assets/DanielRodrigues/CAPA.jpg"
                >
                    <source src="/assets/DanielRodrigues/Watchtower-of-Turkey_.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay" />
            </div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.span
                    className="hero-badge"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    CURSO MASTERCLASS
                </motion.span>
                <h1>Composição e Enquadramento</h1>
                <p>Domine a arte de organizar elementos na imagem e o 'Momento Decisivo'.</p>
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
