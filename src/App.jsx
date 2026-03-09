import { useState } from 'react';
import './App.css';
import { curriculumData } from './data/curriculum';
import Header from './components/Header';
import CurriculumGrid from './components/CurriculumGrid';
import WeekDetail from './components/WeekDetail';
import Gallery from './components/Gallery';
import BlogModal from './components/BlogModal';
import GalleryModal from './components/GalleryModal';
import WhatsAppButton from './components/WhatsAppButton';
import InstagramButton from './components/InstagramButton';
import Newsletter from './components/Newsletter';
import { AudioProvider } from './components/GlobalAudioPlayer';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [activeWeekId, setActiveWeekId] = useState(null);
  const [activeGallery, setActiveGallery] = useState(null); // 'amostra' | 'alunos' | null
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const activeWeek = activeWeekId ? curriculumData.find(w => w.id === activeWeekId) : null;

  const handleWeekSelect = (id) => {
    setActiveWeekId(prev => prev === id ? null : id);
  };

  const handleCloseDetail = () => {
    setActiveWeekId(null);
  };

  const handleOpenGallery = (type) => {
    setActiveGallery(type);
  };

  const handleCloseGallery = () => {
    setActiveGallery(null);
  };

  const handleOpenBlog = () => setIsBlogOpen(true);
  const handleCloseBlog = () => setIsBlogOpen(false);

  return (
    <AudioProvider>
      <div className="app-container">
        <Header
          curriculum={curriculumData}
          onWeekSelect={handleWeekSelect}
          onOpenGallery={handleOpenGallery}
          onOpenBlog={handleOpenBlog}
        />

        <main className="main-content">
          <CurriculumGrid
            curriculum={curriculumData}
            activeWeekId={activeWeekId}
            onWeekSelect={handleWeekSelect}
          />

          <Newsletter />
          <Gallery />
        </main>

        <AnimatePresence mode="wait">
          {activeWeek && (
            <WeekDetail
              week={activeWeek}
              onClose={handleCloseDetail}
            />
          )}

          {activeGallery && (
            <GalleryModal
              type={activeGallery}
              onClose={handleCloseGallery}
            />
          )}

          {isBlogOpen && (
            <BlogModal onClose={handleCloseBlog} />
          )}
        </AnimatePresence>

        <WhatsAppButton />
        <InstagramButton />

        <footer className="main-footer">
          <p>© 2026 Curso de Fotografia Edição Especial 60+ - Prof. Daniel Rodrigues</p>
        </footer>
      </div>
    </AudioProvider>
  );
}

export default App;
