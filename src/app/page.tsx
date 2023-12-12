'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    document.body.addEventListener('mousemove', function () {
      const audioElement = document.querySelector('audio');

      if (audioElement) {
        audioElement.muted = false;
        audioElement.play();
      }
    });
  });

  const onSecretCodeSubmit = () => {
    alert(inputValue);
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-red-600 via-red-600 to-red-700">
      <audio className="hidden" muted autoPlay loop>
        <source src="/audio/jingle-bells.mp3" type="audio/mpeg" />
      </audio>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Image src="/image/logo.png" alt="Logo" width={1000} height={200} />
        <span className="text-white text-[64px]"> Enter your secret code </span>
        <input
          className="text-center text-[64px] bg-transparent border-b-2 border-white focus:outline-none text-white"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="mt-10 bg-white text-red-600 text-[48px] px-10 py-5 rounded-full"
          onClick={onSecretCodeSubmit}
        >
          Submit
        </button>
      </div>
    </main>
  );
}
