import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './GalleryModal.css';

// Using known files from the folder as examples or a mapping
const AMOSTAS = {
    EstudosDeCasos: [
        "/assets/Fotos/EstudosDeCasos/162666e9-3d05-4aeb-b6f0-c11195c9223f.jpg",
        "/assets/Fotos/EstudosDeCasos/17db21746b9072483e467df671a15877.jpg",
        "/assets/Fotos/EstudosDeCasos/28d1990fab39d45ef5db023bf14d7fbe.jpg",
        "/assets/Fotos/EstudosDeCasos/73afa0e9-c2b2-4bcc-b2c3-76c3107cc4f8.jpg",
        "/assets/Fotos/EstudosDeCasos/9a7ca010-707c-4606-b111-21cdac31c3b5.jpg",
        "/assets/Fotos/EstudosDeCasos/f0ade5dc-d3ce-497c-a9cd-a5b29d717ab3.jpg"
    ],
    Eventos: [
        "/assets/Fotos/Eventos/ACB_18-07-2025-17.jpg",
        "/assets/Fotos/Eventos/ACB_18-07-2025-280.jpg",
        "/assets/Fotos/Eventos/IMG_1474.jpg",
        "/assets/Fotos/Eventos/IMG_2342.jpg",
        "/assets/Fotos/Eventos/IMG_3804-2.jpg",
        "/assets/Fotos/Eventos/_MG_3183.jpg",
        "/assets/Fotos/Eventos/_MG_6584.jpg",
        "/assets/Fotos/Eventos/_MG_8117.jpg"
    ],
    Motocross: [
        "/assets/Fotos/Motocross/IMGW-508.jpg",
        "/assets/Fotos/Motocross/IMGW-554.jpg",
        "/assets/Fotos/Motocross/IMGW-828.jpg",
        "/assets/Fotos/Motocross/IMG_5929.jpg",
        "/assets/Fotos/Motocross/IMG_5981.jpg",
        "/assets/Fotos/Motocross/IMG_6093.jpg",
        "/assets/Fotos/Motocross/IMG_8377.jpg"
    ]
};

const ALUNOS = [
    // Empty for now, as requested.
];

const GalleryModal = ({ type, onClose }) => {
    const [activeTab, setActiveTab] = useState('EstudosDeCasos');
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const isAmostra = type === 'amostra';
    
    // Determine the images to show based on the active tab and type
    const currentImages = isAmostra ? (AMOSTAS[activeTab] || []) : ALUNOS;

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev + 1) % currentImages.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
    };

    return (
        <motion.div 
            className="gallery-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div 
                className="gallery-modal-content"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="gallery-close-btn" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="gallery-header-section">
                    <h2>{isAmostra ? "Galeria do Professor" : "Galeria dos Alunos"}</h2>
                    <p>{isAmostra ? "Explorando a luz, a composição e a emoção." : "Em breve: uma seleção dos melhores trabalhos de nossos alunos."}</p>
                </div>

                {isAmostra && (
                    <div className="gallery-tabs">
                        {Object.keys(AMOSTAS).map((tab) => (
                            <button 
                                key={tab}
                                className={`gallery-tab-btn ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab === 'EstudosDeCasos' ? 'Estudos de Casos' : tab}
                            </button>
                        ))}
                    </div>
                )}

                <div className="gallery-grid">
                    {currentImages.length > 0 ? (
                        currentImages.map((src, idx) => (
                            <div 
                                key={idx} 
                                className="gallery-grid-item"
                                onClick={() => setSelectedImageIndex(idx)}
                            >
                                <img src={src} alt="Gallery item" loading="lazy" />
                            </div>
                        ))
                    ) : (
                        <div className="empty-gallery">
                            <p>Ainda estamos reunindo o material maravilhoso para esta categoria. Volte em breve!</p>
                        </div>
                    )}
                </div>

                {/* Fullscreen Slider Overlay */}
                {selectedImageIndex !== null && currentImages.length > 0 && (
                    <div className="fullscreen-slider" onClick={() => setSelectedImageIndex(null)}>
                        <button className="slider-nav prev" onClick={handlePrev}>
                            <ChevronLeft size={40} />
                        </button>
                        
                        <img 
                            src={currentImages[selectedImageIndex]} 
                            alt="Fullscreen" 
                            className="fullscreen-image" 
                            onClick={(e) => e.stopPropagation()}
                        />
                        
                        <button className="slider-nav next" onClick={handleNext}>
                            <ChevronRight size={40} />
                        </button>
                        
                        <button className="slider-close" onClick={() => setSelectedImageIndex(null)}>
                            <X size={32} />
                        </button>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default GalleryModal;
