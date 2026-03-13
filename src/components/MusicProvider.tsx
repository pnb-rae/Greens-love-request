import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";

interface MusicContextType {
  playing: boolean;
  toggle: () => void;
}

const MusicContext = createContext<MusicContextType>({ playing: false, toggle: () => {} });

export const useMusic = () => useContext(MusicContext);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/music/background.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <MusicContext.Provider value={{ playing, toggle }}>
      {children}
    </MusicContext.Provider>
  );
};
