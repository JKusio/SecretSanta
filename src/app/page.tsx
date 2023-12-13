'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

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

  const onSecretCodeSubmit = async () => {
    const result = await signIn('credentials', {
      redirect: false,
      code: inputValue,
    });

    if (result && !result.error) {
      router.push('/wishes');
    } else {
      alert('Nieprawidłowy kod');
    }
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-red-600 via-red-600 to-red-800">
      <audio className="hidden" muted autoPlay loop>
        <source src="/audio/jingle-bells.mp3" type="audio/mpeg" />
      </audio>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Image src="/image/logo.png" alt="Logo" width={1000} height={200} />
        <span className="text-white text-[64px]"> Wpisz swój tajny kod </span>
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
          Dalej
        </button>
      </div>
    </main>
  );
}
