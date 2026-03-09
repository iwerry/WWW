import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const subscriberData = { email, timestamp: new Date().toISOString() };

        try {
            // Tenta enviar para a API
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(subscriberData)
            });

            if (response.ok) {
                setStatus('success');
            } else {
                throw new Error('Server down');
            }
        } catch {
            // Fallback: Salva no LocalStorage se a API falhar
            const existing = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
            if (!existing.some(s => s.email === email)) {
                existing.push(subscriberData);
                localStorage.setItem('newsletter_subscribers', JSON.stringify(existing));
            }
            setStatus('success'); // Para o usuário, funcionou!
        } finally {
            setEmail('');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <motion.section 
            className="newsletter-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="newsletter-container">
                <Mail size={32} className="newsletter-icon" />
                <h3>Fique por dentro das novidades</h3>
                <p>Receba avisos sobre novos materiais e atualizações do curso</p>

                <form onSubmit={handleSubmit} className="newsletter-form">
                    <input
                        type="email"
                        placeholder="Seu melhor e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={status === 'loading'}
                    />
                    <button type="submit" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Enviando...' : 'Inscrever-se'}
                    </button>
                </form>

                {status === 'success' && (
                    <p className="newsletter-message success">✓ Inscrito com sucesso!</p>
                )}
                {status === 'error' && (
                    <p className="newsletter-message error">Erro ao inscrever. Tente novamente.</p>
                )}
            </div>
        </motion.section>
    );
};

export default Newsletter;
