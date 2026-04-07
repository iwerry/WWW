import React from 'react';
import { motion } from 'framer-motion';
import { X, FileText, Headphones, Lightbulb, PlayCircle, Music, BookOpen } from 'lucide-react';
import './WeekDetail.css';
import { useAudio } from './GlobalAudioPlayer';

const WeekDetail = ({ week, onClose }) => {
    const { playTrack } = useAudio();

    return (
        <motion.div
            className="week-detail-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="week-detail-panel"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-button" onClick={onClose} aria-label="Fechar">
                    <X size={24} />
                </button>

                <div className="panel-header">
                    <span className="panel-subtitle">Semana {week.id}</span>
                    <h2>{week.title}</h2>
                    <p>{week.description}</p>
                </div>

                <div className="panel-content-grid">
                    {/* Video Section - Hero of the Detail */}
                    {(week.content.video || week.content.videos) && (
                        <div className="content-block video-block">
                            <h3><PlayCircle size={20} /> Aula Visual</h3>
                            
                            {week.content.videos ? (
                                <div className="multiple-videos" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {week.content.videos.map((vid, idx) => (
                                        <div key={idx} className="video-wrapper">
                                            {vid.title && <h4 style={{ marginBottom: '8px' }}>{vid.title}</h4>}
                                            <video controls poster={vid.thumbnail || week.thumbnail || "/assets/DanielRodrigues/CAPA.jpg"}>
                                                <source src={vid.src} type="video/mp4" />
                                                Seu navegador não suporta vídeo.
                                            </video>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="video-wrapper">
                                    <video controls poster={week.thumbnail || "/assets/DanielRodrigues/CAPA.jpg"}>
                                        <source src={week.content.video} type="video/mp4" />
                                        Seu navegador não suporta vídeo.
                                    </video>
                                </div>
                            )}
                        </div>
                    )}

                    {week.content.audioPlaylist && (
                        <div className="content-block audio-block">
                            <h3><Headphones size={20} /> Podcast: Pílulas de Inspiração</h3>

                            <div className="playlist-list">
                                {week.content.audioPlaylist.map((track, idx) => (
                                    <button
                                        key={idx}
                                        className="playlist-item"
                                        onClick={() => playTrack(track, week.content.audioPlaylist)}
                                    >
                                        <Music size={16} />
                                        <span>{track.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Sidebar: Tips & PDF */}
                    <div className="sidebar-blocks">
                        {(week.content.pdf || week.content.pdfs) && (
                            <div className="content-block pdf-block">
                                <h3><FileText size={20} /> Material de Apoio</h3>
                                <p>Aprofunde seus estudos com o ebook.</p>
                                {week.content.pdfs ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        {week.content.pdfs.map((pdfItem, idx) => (
                                            <a key={idx} href={pdfItem.url} target="_blank" rel="noopener noreferrer" className="action-btn">
                                                {pdfItem.title || "Baixar PDF"}
                                            </a>
                                        ))}
                                    </div>
                                ) : (
                                    <a href={week.content.pdf} target="_blank" rel="noopener noreferrer" className="action-btn">
                                        Baixar PDF
                                    </a>
                                )}
                            </div>
                        )}

                        {week.content.tips && (
                            <div className="content-block tips-block">
                                <h3><Lightbulb size={20} /> Dicas Práticas</h3>
                                <ul>
                                    {week.content.tips.map((tip, i) => (
                                        <li key={i}>{tip}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Glossary Section */}
                    {week.content.glossary && (
                        <div className="content-block glossary-block">
                            <h3><BookOpen size={20} /> Glossário da Semana</h3>
                            <div className="glossary-grid">
                                {week.content.glossary.map((category, idx) => (
                                    <div key={idx} className="glossary-category">
                                        <h4>{category.category}</h4>
                                        <div className="glossary-items">
                                            {category.items.map((item, i) => (
                                                <div key={i} className="glossary-item">
                                                    <dt>{item.term}</dt>
                                                    <dd>{item.definition}</dd>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default WeekDetail;
