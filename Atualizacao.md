# Cronograma de Atualizações - Alfabetização do Olhar 📸

Este documento serve para acompanhar o progresso das atualizações do portal da Masterclass de Fotografia.

## ✅ Semanas Concluídas e Acessíveis (Aulas 1 a 3)

### Semana 1: O Despertar do Olhar
- [x] Desbloqueio de acesso.
- [x] Upload de Vídeo principal.
- [x] Playlist de Áudios (5 pílulas de inspiração).
- [x] Material de Apoio (PDF).
- [x] Glossário técnico inicial.

### Semana 2: Composição e Enquadramento
- [x] Desbloqueio de acesso.
- [x] Atualização da capa (Foto Daniel Rodrigues).
- [x] Upload de Vídeo principal da aula.
- [x] Novos Áudios (4 pílulas sobre Gestalt e Instante Decisivo).
- [x] Glossário expandido (Técnicas de Enquadramento).

### Semana 3: Luz e Sombra
- [x] Desbloqueio de acesso.
- [x] Inserção da imagem de capa (Motocross).
- [x] Vídeo da aula, áudios e pílulas do conhecimento de Cartier-Bresson incluídas.
- [x] Dicas práticas e lista do Glossário atualizados.

---

## ⏳ Próximas Atualizações (A Desbloquear em breve)

**Semanas 4 a 8 (Bloqueadas):** 
- [x] Novas imagens de fundo reais (Eventos, Estudos de Casos, Motocross) aplicadas aos cartões com visual escurecido sem apagar as cores (Glassmorphism + Overlay).
- Estão aguardando apenas o destrancamento do conteúdo (Vídeos/Áudios) à medida que as datas chegam!

---

## 🛠 Novos Recursos e Melhorias Implementadas

- **Vídeo Hero Dinâmico:** Hero do topo substituído por um vídeo do YouTube via `iframe` rodando suavemente em background e em loop.
- **Sistema de Blog Moderno:** Criado um modal de blog expansível (`src/data/blogData.jsx`), preparado para receber 'N' matérias sem acumular conteúdo na tela inicial. Listagem em cards com botão "Voltar".
- **Galeria de Imagens (Menu Dropdown):** Dois menus de galeria inseridos: "Fotos do Professor" (abrangendo Estudos de casos, Eventos e Motocross separados por abas interativas) e um placeholder para "Fotos dos Alunos".
- **Carrossel de Referências Animado:** A faixa inferior na Home page (antes "Olhares da Turma") agora é "Referências de Estudo", mostrando obras de Estudos de Caso num letreiro infinito (CSS Keyframes) que pausa o movimento quando o mouse passa por cima.
- **Navbar Dinâmica:** Menu "Blog" interativo que chama a estrutura do novo data-file via App State.

## 🚀 Como lançar novas matérias no Blog
Basta editar o arquivo `src/data/blogData.jsx`, adicionar um novo `{ id: 2, title: "Novo Post", ... }` na array `blogPosts`, dar o `git commit` e a plataforma atualizará o menu do Blog instantaneamente.
