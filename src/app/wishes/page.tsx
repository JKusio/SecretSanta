'use client';

import { useEffect } from 'react';

export default function Wishes() {
  useEffect(() => {
    document.body.addEventListener('mousemove', function () {
      const audioElement = document.querySelector('audio');

      if (audioElement) {
        audioElement.muted = false;
        audioElement.play();
      }
    });
  });

  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-red-600 via-red-600 to-red-700">
      <audio className="hidden" muted autoPlay loop>
        <source src="/audio/jingle-bells.mp3" type="audio/mpeg" />
      </audio>
    </main>
  );
}
