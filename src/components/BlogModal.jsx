import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import './BlogModal.css';

const BlogModal = ({ onClose }) => {
    const [selectedPostId, setSelectedPostId] = useState(null);

    const selectedPost = blogPosts.find(post => post.id === selectedPostId);

    return (
        <motion.div 
            className="blog-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div 
                className="blog-modal-content"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="blog-close-btn" onClick={onClose}>
                    <X size={24} />
                </button>

                <AnimatePresence mode="wait">
                    {!selectedPost ? (
                        <motion.div 
                            key="list"
                            className="blog-list-view"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h2 className="blog-header-title">Blog e Notícias</h2>
                            <p className="blog-header-subtitle">Fique por dentro das novidades, dicas e estudos sobre fotografia.</p>
                            
                            <div className="blog-posts-grid">
                                {blogPosts.map(post => (
                                    <div 
                                        key={post.id} 
                                        className="blog-post-card"
                                        onClick={() => setSelectedPostId(post.id)}
                                    >
                                        <div className="blog-post-image" style={{ backgroundImage: `url(${post.image})` }}></div>
                                        <div className="blog-post-info">
                                            <span className="blog-post-date">{post.date}</span>
                                            <h3 className="blog-post-title">{post.title}</h3>
                                            <p className="blog-post-summary">{post.summary}</p>
                                            <span className="blog-post-read-more">Ler Mais →</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="article"
                            className="blog-article-view"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                        >
                            <button className="blog-back-btn" onClick={() => setSelectedPostId(null)}>
                                <ArrowLeft size={20} />
                                Voltar
                            </button>
                            
                            <article className="blog-article">
                                <h1>{selectedPost.title}</h1>
                                <p className="blog-article-meta">{selectedPost.date}</p>
                                
                                <div className="blog-article-content">
                                    {selectedPost.content}
                                </div>
                                
                                <div className="blog-signature">
                                    <strong>Professor Daniel Rodrigues</strong><br/>
                                    no Blog
                                </div>
                            </article>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default BlogModal;
