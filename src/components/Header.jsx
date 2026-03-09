import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Lock, Unlock } from 'lucide-react';
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
                    <div className="dropdown">
                        <button className="nav-link-btn dropdown-trigger">
                            Ver Aulas do Curso <ChevronDown size={16} />
                        </button>
                        <div className="dropdown-content">
                            {curriculum.map((week) => (
                                <button
                                    key={week.id}
                                    className={`dropdown-item ${week.locked ? 'locked' : 'unlocked'}`}
                                    onClick={() => !week.locked && onWeekSelect(week.id)}
                                    disabled={week.locked}
                                >
                                    <div className="week-info">
                                        <span className="week-number">Semana {week.id}</span>
                                        <span className="week-title-short">{week.title.split(':')[1] || week.title}</span>
                                    </div>
                                    {week.locked ? (
                                        <span className="lock-tag">
                                            <Lock size={12} /> BLOQUEADO
                                        </span>
                                    ) : (
                                        <span className="unlock-tag">
                                            <Unlock size={12} /> LIBERADO
                                        </span>
                                    )}
                                </button>
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
                /*poster="/assets/DanielRodrigues/CAPA.jpg"*/
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
                    CURSO FOTOGRAFIA
                </motion.span>
                <h1>Alfabetização do Olhar</h1>
                <p>O despertar do olhar e crie harmonia nas suas fotos.</p>
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
