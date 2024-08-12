import React, { useRef, useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const Waveform = ({ audioUrl }) => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Initialize WaveSurfer
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#ddd",
      progressColor: "#4CAF50",
      cursorColor: "#4CAF50",
      barWidth: 2,
      responsive: true,
    });

    // Load the audio file
    wavesurferRef.current.load(audioUrl);
   
  }, [audioUrl]);

  const handlePlayPause = () => {
    wavesurferRef.current.playPause();
    setPlaying(!playing);
  };

  return (
    <div>
      <div ref={waveformRef} id="waveform" />
      <button onClick={handlePlayPause}>
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Waveform;
