# 📸 Alfabetização do Olhar - Portal do Curso

## 🚀 Como Executar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Iniciar o Servidor de Newsletter (Terminal 1)
```bash
npm run server
```
O servidor da API de newsletter rodará em `http://localhost:3001`

### 3. Iniciar o Site (Terminal 2)
```bash
npm run dev
```
O site estará disponível em `http://localhost:5173`

## ✨ Novas Funcionalidades

### 🎵 Player de Áudio Global
- Player fixo na parte inferior do site
- Controles: Play/Pause, Barra de progresso, Volume, Download
- Clique em qualquer áudio da playlist para tocar

### 📧 Newsletter
- Formulário de inscrição para receber novidades
- Emails salvos em `server/newsletter-subscribers.json`
- Validação de email duplicado

### 📱 Redes Sociais
- **WhatsApp**: Botão flutuante (canto inferior direito)
- **Instagram**: Botão flutuante (@danielrodrigues.photography)

### 🖼️ Hero Section
- Imagem de capa: `CAPA.jpg`
- Botão "Entrar na Sala de Aula" abre a Semana 1

## 📂 Estrutura de Arquivos

```
src/
├── components/
│   ├── GlobalAudioPlayer.jsx    # Player global com context
│   ├── Newsletter.jsx            # Formulário de newsletter
│   ├── InstagramButton.jsx       # Botão do Instagram
│   └── ...
server/
├── newsletter-api.js             # API Express para newsletter
└── newsletter-subscribers.json   # Emails cadastrados (criado automaticamente)
```

## 🎨 Tecnologias

- **React 19** + **Vite**
- **Framer Motion** (animações)
- **Lucide React** (ícones)
- **Express** (API backend)

---

**Prof. Daniel Rodrigues**  
📷 [@danielrodrigues.photography](https://www.instagram.com/danielrodrigues.photography/)
