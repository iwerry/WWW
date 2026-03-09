import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import './BlogModal.css';

const BlogModal = ({ onClose }) => {
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

                <article className="blog-article">
                    <h1>📸 Bem-vindos à Semana 1: O Despertar do Seu Olhar Fotográfico!</h1>
                    <p>Olá, futuros mestres da fotografia! É com muita alegria que damos as boas-vindas ao nosso Curso de Fotografia. Nesta primeira semana, vamos dar os nossos primeiros passos (ou cliques!) em um universo fascinante.</p>
                    <p>A fotografia é, na sua essência, a arte de "pintar com a luz". Mas antes de nos preocuparmos com botões e configurações complicadas, o nosso maior objetivo no Módulo 1 é despertar a sua intuição e observação. Vamos transformar o simples ato de "tirar uma foto" na bela arte de "fazer uma fotografia".</p>
                    <p>Para ajudar você a começar com o pé direito, separamos as principais novidades do mundo da fotografia e algumas dicas de ouro sobre o que aprenderemos nesta semana!</p>
                    
                    <h3>🚀 Novidades do Mundo Fotográfico: O Equipamento Trabalhando a Seu Favor</h3>
                    <p>Uma das maiores dúvidas de quem começa é: "Que tipo de câmera eu preciso?". A boa notícia que trazemos diretamente de 2025 é que a tecnologia está mais acessível, inteligente e leve do que nunca!</p>
                    <p><strong>A Revolução das "Mirrorless" (Câmeras sem espelho):</strong> Por muitos anos, as câmeras profissionais padrão foram as DSLRs, que usam um sistema interno de espelhos e costumam ser grandes e pesadas. A grande novidade atual são as câmeras Mirrorless. Ao remover o espelho interno, os fabricantes conseguiram criar câmeras muito menores, mais leves e perfeitas para levar em viagens ou passeios sem forçar as costas.</p>
                    <p><strong>Foco Automático com Inteligência Artificial:</strong> Lembra de quando era difícil focar em um neto correndo pela sala ou em um pássaro no jardim? Hoje, as câmeras modernas (e até os celulares) possuem sistemas de foco guiados por Inteligência Artificial. Elas conseguem reconhecer e "travar" o foco automaticamente nos olhos e rostos das pessoas e até de animais de estimação. A tecnologia faz o trabalho pesado para que você possa focar na emoção do momento!</p>
                    <p><strong>O Poder no Seu Bolso:</strong> A tecnologia dos sensores (especialmente os do tipo CMOS) evoluiu tanto que os celulares atuais consomem pouca bateria e entregam uma qualidade de imagem que rivaliza com equipamentos que antes eram enormes e caros. Se você vai usar o seu smartphone no curso, saiba que tem uma ferramenta incrivelmente poderosa nas mãos!</p>
                    
                    <h3>💡 Dicas para a Semana 1: Dominando a Luz e o Foco</h3>
                    <p>Nesta primeira semana de aulas, vamos mergulhar em dois pilares técnicos essenciais que dão vida a qualquer imagem:</p>
                    <p><strong>1. Entenda o Triângulo Mágico da Luz:</strong> Toda fotografia depende da exposição correta à luz. Nós vamos aprender a equilibrar três elementos fundamentais (conhecidos como o Triângulo de Exposição): a Abertura (que controla a quantidade de luz que entra na lente), a Velocidade do Obturador (que congela ou borra o movimento) e o ISO (que é a sensibilidade da sua câmera à luz). Dominar esses três pontos é assumir o controle total sobre o brilho da sua imagem!</p>
                    <p><strong>2. A Busca pelo "Momento Decisivo":</strong> O mestre francês Henri Cartier-Bresson nos ensinou que existe uma fração de segundo mágica em que todos os elementos de uma cena se alinham perfeitamente — ele chamava isso de "O Momento Decisivo". A dica aqui é a paciência. Antes de sair clicando dezenas de vezes, observe o ambiente, a luz, as pessoas... e deixe a intuição guiar o seu clique no momento exato.</p>
                    <p><strong>3. A Máquina não substitui o Coração:</strong> Embora a Inteligência Artificial possa gerar imagens perfeitas e o foco automático seja incrível, nenhuma máquina consegue viver uma experiência humana. A câmera não sente a emoção de um casamento, a beleza de um pôr do sol ou o amor em um abraço de família. A sua conexão humana e o seu olhar único são absolutamente insubstituíveis.</p>
                    
                    <h3>🛠️ Desafio da Semana</h3>
                    <p>Para entrarmos no clima, temos um pequeno desafio antes da nossa próxima aula: Escolha um objeto simples na sua casa (pode ser uma xícara, uma flor ou um livro). Coloque-o perto de uma janela. Fotografe esse mesmo objeto de manhã, ao meio-dia e no final da tarde. Observe como a mudança da luz natural altera completamente a "emoção" da sua fotografia.</p>
                    <p>Estamos muito animados para iniciar essa jornada visual ao seu lado. Traga sua câmera, seu celular, suas dúvidas e, principalmente, a sua vontade de ver o mundo com novos olhos!</p>
                    <p><em>Nos vemos na aula! (Sua Equipe do Curso de Fotografia)</em></p>
                    
                    <div className="blog-signature">
                        <strong>Professor Daniel Rodrigues</strong><br/>
                        no Blog
                    </div>
                </article>
            </motion.div>
        </motion.div>
    );
};

export default BlogModal;
