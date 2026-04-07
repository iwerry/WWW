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
        "/assets/Fotos/EstudosDeCasos/556bf8083c36518fed2b25880dd2ed36.jpg",
        "/assets/Fotos/EstudosDeCasos/73afa0e9-c2b2-4bcc-b2c3-76c3107cc4f8.jpg",
        "/assets/Fotos/EstudosDeCasos/9a7ca010-707c-4606-b111-21cdac31c3b5.jpg",
        "/assets/Fotos/EstudosDeCasos/AJM ❤❤❤.jpg",
        "/assets/Fotos/EstudosDeCasos/Horse & Rider Photoshoot, Kennedy & Zero — J_Klein Photos.jpg",
        "/assets/Fotos/EstudosDeCasos/c49e22d8507cd1a930ade4f72a37884b.jpg",
        "/assets/Fotos/EstudosDeCasos/ccfdc929769df03918de606248a1ed19.jpg",
        "/assets/Fotos/EstudosDeCasos/d7db9e37-6efb-44dd-88f6-29590c11062c.jpg",
        "/assets/Fotos/EstudosDeCasos/e6bd4f9c7ff20ae30cb4ad60737986c9.jpg",
        "/assets/Fotos/EstudosDeCasos/f0ade5dc-d3ce-497c-a9cd-a5b29d717ab3.jpg",
        "/assets/Fotos/EstudosDeCasos/f7a1006d60b7587d6244511d0682d3e4.jpg"
    ],
    CasamentosPremiados: [
        "/assets/Fotos/Casamentos-Premiados/2913436086884b7def79.jpg",
        "/assets/Fotos/Casamentos-Premiados/29142360866e270dc8a8.jpg",
        "/assets/Fotos/Casamentos-Premiados/29142360866e285fd9b10.jpg",
        "/assets/Fotos/Casamentos-Premiados/43841865cfa7eb3a9530.jpg",
        "/assets/Fotos/Casamentos-Premiados/44764664dcf904f001a0.jpg",
        "/assets/Fotos/Casamentos-Premiados/49408766829cd6269188.jpg",
        "/assets/Fotos/Casamentos-Premiados/DAVID-HOFMAN-366-r48.jpg",
        "/assets/Fotos/Casamentos-Premiados/FDB28-entry-2754-franciscoalvarezfracofotografia_03.jpg",
        "/assets/Fotos/Casamentos-Premiados/Jesus-Ochoa-71-r41.jpg",
        "/assets/Fotos/Casamentos-Premiados/Ralf-Czogallik-132-r40.jpg",
        "/assets/Fotos/Casamentos-Premiados/fabio-colombo_10.jpg",
        "/assets/Fotos/Casamentos-Premiados/julien-laurent-georges-3321-r69.jpg",
        "/assets/Fotos/Casamentos-Premiados/mateus-scheibel_1.jpg",
        "/assets/Fotos/Casamentos-Premiados/mischa-baettig-gallery-76101.jpg",
        "/assets/Fotos/Casamentos-Premiados/patrick-mateer_22.jpg",
        "/assets/Fotos/Casamentos-Premiados/peng-zhou-6847-r87.jpg",
        "/assets/Fotos/Casamentos-Premiados/rafael-pimenta_19.jpg",
        "/assets/Fotos/Casamentos-Premiados/rafael-pimenta_3.jpg",
        "/assets/Fotos/Casamentos-Premiados/romeo-mihail_11.jpg",
        "/assets/Fotos/Casamentos-Premiados/romeo-mihail_2.jpg",
        "/assets/Fotos/Casamentos-Premiados/romeo-mihail_4.jpg",
        "/assets/Fotos/Casamentos-Premiados/romeo-mihail_6.jpg"
    ],
    Eventos: [
        "/assets/Fotos/Eventos/ACB_18-07-2025-17.jpg",
        "/assets/Fotos/Eventos/ACB_18-07-2025-280.jpg",
        "/assets/Fotos/Eventos/ACB_18-07-2025-289.jpg",
        "/assets/Fotos/Eventos/ACB_18-07-2025-291.jpg",
        "/assets/Fotos/Eventos/ACB_18-07-2025-32.jpg",
        "/assets/Fotos/Eventos/ACB_18-07-2025-338.jpg",
        "/assets/Fotos/Eventos/ACB_18-07-2025-340.jpg",
        "/assets/Fotos/Eventos/ACB_18-07-2025-7.jpg",
        "/assets/Fotos/Eventos/DSC05789.jpg",
        "/assets/Fotos/Eventos/DSC06173.jpg",
        "/assets/Fotos/Eventos/IMG_1474.jpg",
        "/assets/Fotos/Eventos/IMG_1497.jpg",
        "/assets/Fotos/Eventos/IMG_2147.jpg",
        "/assets/Fotos/Eventos/IMG_2266.jpg",
        "/assets/Fotos/Eventos/IMG_2342.jpg",
        "/assets/Fotos/Eventos/IMG_2563_Fx0.jpg",
        "/assets/Fotos/Eventos/IMG_3663.jpg",
        "/assets/Fotos/Eventos/IMG_3804-2.jpg",
        "/assets/Fotos/Eventos/IMG_3805-2.jpg",
        "/assets/Fotos/Eventos/IMG_3821-3.jpg",
        "/assets/Fotos/Eventos/IMG_3823-3.jpg",
        "/assets/Fotos/Eventos/IMG_3824-3.jpg",
        "/assets/Fotos/Eventos/IMG_3837.jpg",
        "/assets/Fotos/Eventos/IMG_3920.jpg",
        "/assets/Fotos/Eventos/IMG_4000-2.jpg",
        "/assets/Fotos/Eventos/IMG_4517.jpg",
        "/assets/Fotos/Eventos/IMG_4979.jpg",
        "/assets/Fotos/Eventos/IMG_5322.jpg",
        "/assets/Fotos/Eventos/IMG_5451.jpg",
        "/assets/Fotos/Eventos/IMG_5666.jpg",
        "/assets/Fotos/Eventos/IMG_5760.jpg",
        "/assets/Fotos/Eventos/IMG_5810.jpg",
        "/assets/Fotos/Eventos/IMG_5837.jpg",
        "/assets/Fotos/Eventos/IMG_5891.jpg",
        "/assets/Fotos/Eventos/IMG_6074.jpg",
        "/assets/Fotos/Eventos/IMG_9522.jpg",
        "/assets/Fotos/Eventos/_MG_0817.jpg",
        "/assets/Fotos/Eventos/_MG_1591.png",
        "/assets/Fotos/Eventos/_MG_1628.JPG",
        "/assets/Fotos/Eventos/_MG_2580.jpg",
        "/assets/Fotos/Eventos/_MG_2879.jpg",
        "/assets/Fotos/Eventos/_MG_3076.jpg",
        "/assets/Fotos/Eventos/_MG_3183.jpg",
        "/assets/Fotos/Eventos/_MG_3198.jpg",
        "/assets/Fotos/Eventos/_MG_3607.jpg",
        "/assets/Fotos/Eventos/_MG_3656.jpg",
        "/assets/Fotos/Eventos/_MG_4088.jpg",
        "/assets/Fotos/Eventos/_MG_4130.jpg",
        "/assets/Fotos/Eventos/_MG_4293.jpg",
        "/assets/Fotos/Eventos/_MG_4548.jpg",
        "/assets/Fotos/Eventos/_MG_4595.jpg",
        "/assets/Fotos/Eventos/_MG_4863.jpg",
        "/assets/Fotos/Eventos/_MG_4972.jpg",
        "/assets/Fotos/Eventos/_MG_6584.jpg",
        "/assets/Fotos/Eventos/_MG_6692.jpg",
        "/assets/Fotos/Eventos/_MG_6790.jpg",
        "/assets/Fotos/Eventos/_MG_8117.jpg",
        "/assets/Fotos/Eventos/_MG_8272.jpg"
    ],
    Motocross: [
        "/assets/Fotos/Motocross/IMGW-508.jpg",
        "/assets/Fotos/Motocross/IMGW-554.jpg",
        "/assets/Fotos/Motocross/IMGW-828.jpg",
        "/assets/Fotos/Motocross/IMG_3801.jpg",
        "/assets/Fotos/Motocross/IMG_3810.jpg",
        "/assets/Fotos/Motocross/IMG_4192.jpg",
        "/assets/Fotos/Motocross/IMG_4935.jpg",
        "/assets/Fotos/Motocross/IMG_4944.jpg",
        "/assets/Fotos/Motocross/IMG_5082.jpg",
        "/assets/Fotos/Motocross/IMG_5929.jpg",
        "/assets/Fotos/Motocross/IMG_5981.jpg",
        "/assets/Fotos/Motocross/IMG_6093.jpg",
        "/assets/Fotos/Motocross/IMG_8107.jpg",
        "/assets/Fotos/Motocross/IMG_8377.jpg",
        "/assets/Fotos/Motocross/IMG_8509.jpg",
        "/assets/Fotos/Motocross/_MG_5848.jpg",
        "/assets/Fotos/Motocross/_MG_9293.jpg",
        "/assets/Fotos/Motocross/_MG_9597.jpg",
        "/assets/Fotos/Motocross/_MG_9616.jpg",
        "/assets/Fotos/Motocross/_MG_9626.jpg"
    ]
};

const ALUNOS = [
    "/assets/Alunos/Antonio Ribeiro Duarte/WhatsApp Image 2026-03-31 at 20.02.05 (1).jpeg",
    "/assets/Alunos/Antonio Ribeiro Duarte/WhatsApp Image 2026-03-31 at 20.02.05.jpeg",
    "/assets/Alunos/Antonio Ribeiro Duarte/WhatsApp Image 2026-03-31 at 20.02.07 (1).jpeg",
    "/assets/Alunos/Antonio Ribeiro Duarte/WhatsApp Image 2026-03-31 at 20.02.07.jpeg",
    "/assets/Alunos/Antonio Ribeiro Duarte/WhatsApp Image 2026-03-31 at 20.02.08 (1).jpeg",
    "/assets/Alunos/Antonio Ribeiro Duarte/WhatsApp Image 2026-03-31 at 20.02.09 (1).jpeg",
    "/assets/Alunos/Antonio Ribeiro Duarte/WhatsApp Image 2026-03-31 at 20.02.09.jpeg",
    "/assets/Alunos/Antonio Ribeiro Duarte/WhatsApp Image 2026-03-31 at 20.02.11 (1).jpeg",
    "/assets/Alunos/Antonio Ribeiro Duarte/WhatsApp Image 2026-03-31 at 20.02.12.jpeg",
    "/assets/Alunos/Antonio Ribeiro Duarte/WhatsApp Image 2026-03-31 at 20.23.37.jpeg",
    "/assets/Alunos/Antonio Ribeiro Duarte/WhatsApp Image 2026-03-31 at 20.23.38.jpeg",
    "/assets/Alunos/Antonio Ribeiro Duarte/WhatsApp Image 2026-03-31 at 20.23.39.jpeg",
    "/assets/Alunos/Antonio Ribeiro Duarte/WhatsApp Image 2026-03-31 at 21.06.04 (2).jpeg",
    "/assets/Alunos/Antonio Ribeiro Duarte/WhatsApp Image 2026-04-04 at 12.21.21.jpeg"
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
                                {tab === 'EstudosDeCasos' ? 'Estudos de Casos' : tab === 'CasamentosPremiados' ? 'Casamentos Premiados' : tab}
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
