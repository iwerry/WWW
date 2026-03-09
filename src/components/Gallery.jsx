import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
    const photos = [
        "/assets/Fotos/EstudosDeCasos/162666e9-3d05-4aeb-b6f0-c11195c9223f.jpg",
        "/assets/Fotos/EstudosDeCasos/17db21746b9072483e467df671a15877.jpg",
        "/assets/Fotos/EstudosDeCasos/28d1990fab39d45ef5db023bf14d7fbe.jpg",
        "/assets/Fotos/EstudosDeCasos/73afa0e9-c2b2-4bcc-b2c3-76c3107cc4f8.jpg",
        "/assets/Fotos/EstudosDeCasos/f0ade5dc-d3ce-497c-a9cd-a5b29d717ab3.jpg",
        "/assets/Fotos/EstudosDeCasos/f7a1006d60b7587d6244511d0682d3e4.jpg"
    ];

    return (
        <motion.section 
            className="gallery-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="gallery-header">
                <h2>Referências de Estudo</h2>
                <p>Fotos de referência de estudo que o professor disponibilizou.</p>
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
        </motion.section>
    );
};

export default Gallery;
