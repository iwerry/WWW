import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Disc } from 'lucide-react';
import './CustomAudioPlayer.css';

const CustomAudioPlayer = ({ src, title }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    // Reset state when src changes handled by key in parent or... 
    // Actually, to fix the lint we can remove this and let the parent handle remounting using a `key={currentTrack.src}` prop on the CustomAudioPlayer.
    // That is the React way. So I will remove this block.

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        const handleEnded = () => setIsPlaying(false);

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [src]);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="vinyl-player-container">
            <audio ref={audioRef} src={src} preload="metadata" />

            <div className={`vinyl-disc ${isPlaying ? 'spinning' : ''}`}>
                <div className="vinyl-grooves"></div>
                <div className="vinyl-label">
                    <Disc size={24} color="#d4af37" />
                </div>
            </div>

            <div className="player-info">
                <h5>Tocando agora:</h5>
                <div className="track-title">{title || "Faixa de Áudio"}</div>

                <div className="controls-row">
                    <button
                        onClick={togglePlay}
                        className="vinyl-play-btn"
                        aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                    >
                        {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
                    </button>

                    <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomAudioPlayer;
