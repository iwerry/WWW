import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
    // Placeholder images - in real app would come from props/data
    const photos = [
        "/assets/Cartier-Bresson.jpg",
        "/assets/Cartier-Bresson.jpg",
        "/assets/Cartier-Bresson.jpg",
        "/assets/Cartier-Bresson.jpg"
    ];

    return (
        <section className="gallery-section">
            <div className="gallery-header">
                <h2>Olhares da Turma</h2>
                <p>A beleza capturada pelos nossos alunos</p>
            </div>

            <div className="gallery-carousel">
                <div className="gallery-track">
                    {photos.map((src, index) => (
                        <motion.div
                            key={index}
                            className="gallery-item"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src={src} alt={`Foto aluno ${index + 1}`} />
                        </motion.div>
                    ))}
                    {photos.map((src, index) => (
                        <motion.div
                            key={`dup-${index}`}
                            className="gallery-item"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src={src} alt={`Foto aluno ${index + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
