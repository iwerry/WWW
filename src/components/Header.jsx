import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Lock, Unlock, Menu, X } from 'lucide-react';
import './Header.css';

const Header = ({ curriculum, onWeekSelect, onOpenGallery, onOpenBlog }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <div className="hero-container">
            {/* Elegant Top Navbar */}
            <nav className="top-nav">
                <div className="nav-header">
                    <div className="nav-logo">Prof. Daniel</div>
                    <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
                <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    {/* Botão Blog (Simples) */}
                    <button className="nav-link-btn" onClick={onOpenBlog}>
                        Blog
                    </button>

                    {/* Galeria Dropdown */}
                    <div className="dropdown">
                        <button className="nav-link-btn dropdown-trigger">
                            Galeria <ChevronDown size={16} />
                        </button>
                        <div className="dropdown-content" style={{ minWidth: '220px' }}>
                            <button className="dropdown-item unlocked" onClick={() => onOpenGallery('amostra')}>
                                <div className="week-info">
                                    <span className="week-title-short">Fotos do Professor</span>
                                </div>
                            </button>
                            <button className="dropdown-item unlocked" onClick={() => onOpenGallery('alunos')}>
                                <div className="week-info">
                                    <span className="week-title-short">Fotos dos Alunos</span>
                                </div>
                            </button>
                        </div>
                    </div>

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
            <div className="video-background" style={{ overflow: 'hidden' }}>
                <iframe
                    className="hero-video"
                    src="https://www.youtube.com/embed/1m6EP9l4xI8?autoplay=1&mute=1&loop=1&playlist=1m6EP9l4xI8&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playsinline=1"
                    title="Hero Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    style={{ pointerEvents: 'none', transform: 'scale(1.5)', width: '100%', height: '100%' }}
                ></iframe>
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
