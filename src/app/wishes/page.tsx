'use client';

import { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function Wishes() {
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  useEffect(() => {
    setSwiper(
      new Swiper('.swiper', {
        modules: [Autoplay],
      }),
    );

    document.body.addEventListener('mousedown', function () {
      const audioElement = document.querySelector('audio');

      if (audioElement) {
        audioElement.muted = false;
        audioElement.play();
      }
    });
  }, []);

  return (
    <main className="h-screen w-full bg-gradient-to-r from-red-600 via-red-600 to-red-700">
      <audio className="hidden" muted autoPlay loop>
        <source src="/audio/jingle-bells.mp3" type="audio/mpeg" />
      </audio>
      <div className="flex container mx-auto h-full">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide wishes-slide">Slide 1</div>
            <div className="swiper-slide wishes-slide">Slide 2</div>
            <div className="swiper-slide wishes-slide">Slide 3</div>
          </div>
        </div>
      </div>
    </main>
  );
}
