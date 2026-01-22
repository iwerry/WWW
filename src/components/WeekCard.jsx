import React from 'react';
import { motion } from 'framer-motion';
import { Lock, PlayCircle, BookOpen } from 'lucide-react';
import './WeekCard.css';

const WeekCard = ({ week, isActive, onClick }) => {
    const isLocked = week.locked;

    return (
        <motion.div
            className={`week-card ${isLocked ? 'locked' : 'unlocked'} ${isActive ? 'active' : ''}`}
            onClick={!isLocked ? onClick : null}
            whileHover={!isLocked ? { scale: 1.05, borderColor: "var(--color-gold)" } : {}}
            whileTap={!isLocked ? { scale: 0.98 } : { x: [0, -4, 4, -4, 4, 0] }}
        >
            {week.thumbnail && <div className="card-background" style={{ backgroundImage: `url(${week.thumbnail})` }} />}
            <div className="card-glass-layer" />

            <div className="card-content">
                <span className="week-number">SEMANA {week.id}</span>
                <h3>{week.title}</h3>

                {isLocked ? (
                    <div className="locked-state">
                        <Lock size={24} className="icon-gold" />
                        <span>Em breve</span>
                    </div>
                ) : (
                    <div className="actions-preview">
                        <div className="pill"><BookOpen size={14} /> Ebook</div>
                        <div className="pill"><PlayCircle size={14} /> Aula</div>
                    </div>
                )}
            </div>

            {/* Decorative Glow */}
            {!isLocked && <div className="card-glow" />}
        </motion.div>
    );
};

export default WeekCard;
