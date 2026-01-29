import { useState } from 'react';
import './App.css';
import { curriculumData } from './data/curriculum';
import Header from './components/Header';
import CurriculumGrid from './components/CurriculumGrid';
import WeekDetail from './components/WeekDetail';
import Gallery from './components/Gallery';
import WhatsAppButton from './components/WhatsAppButton';
import InstagramButton from './components/InstagramButton';
import Newsletter from './components/Newsletter';
import { AudioProvider } from './components/GlobalAudioPlayer';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [activeWeekId, setActiveWeekId] = useState(null);
  const activeWeek = activeWeekId ? curriculumData.find(w => w.id === activeWeekId) : null;

  const handleWeekSelect = (id) => {
    setActiveWeekId(prev => prev === id ? null : id);
  };

  const handleCloseDetail = () => {
    setActiveWeekId(null);
  };

  return (
    <AudioProvider>
      <div className="app-container">
        <Header
          curriculum={curriculumData}
          onWeekSelect={handleWeekSelect}
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
        </AnimatePresence>

        <WhatsAppButton />
        <InstagramButton />

        <footer className="main-footer">
          <p>© 2026 Alfabetização do Olhar - Prof. Daniel</p>
        </footer>
      </div>
    </AudioProvider>
  );
}

export default App;
