import React from 'react';
import WeekCard from './WeekCard';
import './CurriculumGrid.css';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const CurriculumGrid = ({ curriculum, activeWeekId, onWeekSelect }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <section className="curriculum-section">
            <h2 className="section-title">Nossa Jornada</h2>
            <motion.div
                className="curriculum-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {curriculum.map((week) => (
                    <motion.div key={week.id} variants={itemVariants}>
                        <WeekCard
                            week={week}
                            isActive={week.id <= activeWeekId}
                            onSelect={() => onWeekSelect(week)}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default CurriculumGrid;
