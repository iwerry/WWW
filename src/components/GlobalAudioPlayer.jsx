import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './GlobalAudioPlayer.css';

const AudioContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [playlist, setPlaylist] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [isIdle, setIsIdle] = useState(false);
    const audioRef = useRef(null);
    const idleTimerRef = useRef(null);

    const resetIdleTimer = () => {
        setIsIdle(false);
        if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
        idleTimerRef.current = setTimeout(() => {
            if (isPlaying) setIsIdle(true);
        }, 8000); // 8 segundos de inatividade para esconder
    };

    useEffect(() => {
        window.addEventListener('mousemove', resetIdleTimer);
        window.addEventListener('touchstart', resetIdleTimer);
        return () => {
            window.removeEventListener('mousemove', resetIdleTimer);
            window.removeEventListener('touchstart', resetIdleTimer);
            if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
        };
    }, [isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        const handleEnded = () => {
            if (currentIndex < playlist.length - 1) {
                playNext();
            } else {
                setIsPlaying(false);
            }
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [currentTrack, currentIndex, playlist.length]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume;
        }
    }, [volume, isMuted]);

    const playTrack = (track, trackPlaylist = []) => {
        setPlaylist(trackPlaylist);
        const index = trackPlaylist.findIndex(t => t.src === track.src);
        setCurrentIndex(index >= 0 ? index : 0);
        setCurrentTrack(track);
        setIsPlaying(true);
        resetIdleTimer();
        setTimeout(() => audioRef.current?.play(), 100);
    };

    const playNext = () => {
        if (currentIndex < playlist.length - 1) {
            const nextTrack = playlist[currentIndex + 1];
            setCurrentIndex(currentIndex + 1);
            setCurrentTrack(nextTrack);
            setIsPlaying(true);
            resetIdleTimer();
            setTimeout(() => audioRef.current?.play(), 100);
        }
    };

    const playPrevious = () => {
        if (currentIndex > 0) {
            const prevTrack = playlist[currentIndex - 1];
            setCurrentIndex(currentIndex - 1);
            setCurrentTrack(prevTrack);
            setIsPlaying(true);
            resetIdleTimer();
            setTimeout(() => audioRef.current?.play(), 100);
        }
    };

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
        resetIdleTimer();
    };

    const handleProgressClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        if (audioRef.current) {
            audioRef.current.currentTime = percent * audioRef.current.duration;
        }
        resetIdleTimer();
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
        resetIdleTimer();
    };

    const closePlayer = () => {
        setIsPlaying(false);
        setCurrentTrack(null);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <AudioContext.Provider value={{ playTrack, currentTrack }}>
            {children}

            <AnimatePresence>
                {currentTrack && (
                    <motion.div
                        className={`global-audio-player ${isIdle ? 'idle' : ''}`}
                        initial={{ y: 200, opacity: 0 }}
                        animate={{
                            y: isIdle ? 80 : 0,
                            opacity: isIdle ? 0.3 : 1
                        }}
                        exit={{ y: 200, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        onMouseEnter={() => setIsIdle(false)}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <audio ref={audioRef} src={currentTrack.src} />

                        <div className="player-track-info">
                            <div className="track-title-global">{currentTrack.title}</div>
                        </div>

                        <div className="player-controls-center">
                            <button
                                className="control-btn-small"
                                onClick={playPrevious}
                                disabled={currentIndex === 0}
                            >
                                <SkipBack size={20} />
                            </button>

                            <button className="control-btn" onClick={togglePlay}>
                                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
                            </button>

                            <button
                                className="control-btn-small"
                                onClick={playNext}
                                disabled={currentIndex === playlist.length - 1}
                            >
                                <SkipForward size={20} />
                            </button>
                        </div>

                        <div className="player-progress-bar" onClick={handleProgressClick}>
                            <div className="progress-fill-global" style={{ width: `${progress}%` }} />
                        </div>

                        <div className="player-controls-right">
                            <button className="control-btn-small" onClick={toggleMute}>
                                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={isMuted ? 0 : volume}
                                onChange={(e) => setVolume(parseFloat(e.target.value))}
                                className="volume-slider"
                            />
                            <button className="control-btn-small" onClick={closePlayer} aria-label="Fechar Áudio" style={{ marginLeft: '10px' }}>
                                <X size={20} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </AudioContext.Provider>
    );
};
