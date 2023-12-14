'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function Wishes() {
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const xdDocRef = useRef<HTMLDivElement | null>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setSwiper(
      new Swiper('.swiper', {
        autoplay: {
          delay: 375,
          stopOnLastSlide: true,
        },
        modules: [Autoplay],
        on: {
          slideChange: function (e) {
            if (e.activeIndex === 8) {
              e.autoplay.stop();
              e.allowSlideNext = false;
              e.allowSlidePrev = false;
            }
          },
        },
      }),
    );

    document.body.addEventListener('mousemove', function () {
      const audioElement = document.querySelector('audio');

      if (audioElement) {
        audioElement.muted = false;
        audioElement.play();
      }
    });
  }, []);

  const onReplayClick = () => {
    if (swiper) {
      swiper.slideTo(0);
      swiper.autoplay.start();
    }

    if (buttonRef !== null) {
      buttonRef.current?.classList.remove('hidden');
      buttonRef.current?.classList.remove('absolute');
    }

    setCounter(0);
  };

  const handleMouseEnter = () => {
    if (buttonRef !== null && xdDocRef !== null) {
      if (!buttonRef.current?.classList.contains('absolute')) {
        buttonRef.current?.classList.add('absolute');
      }

      const xdDoc = document.querySelector('#xd');

      const xdDocHeight = xdDocRef.current.offsetHeight;
      const xdDocWidth = xdDocRef.current.offsetWidth;

      const randomTop = Math.floor(Math.random() * (xdDocHeight - buttonRef.current.offsetHeight));
      const randomLeft = Math.floor(Math.random() * (xdDocWidth - buttonRef.current.offsetWidth));

      buttonRef.current.style.top = `${randomTop}px`;
      buttonRef.current.style.left = `${randomLeft}px`;

      setCounter(counter + 1);

      if (counter > 5) {
        buttonRef.current.classList.add('hidden');
      }
    }
  };

  const handleYesButtonClick = () => {
    if (swiper) {
      swiper.slideTo(9);
      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
    }
  };

  return (
    <main className="h-screen w-full bg-gradient-to-r from-red-600 via-red-600 to-red-700">
      <audio className="hidden" muted autoPlay loop>
        <source src="/audio/jingle-bells.mp3" type="audio/mpeg" />
      </audio>
      <div ref={xdDocRef} className="flex container mx-auto h-full">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide wishes-slide">
              <div className="slide">
                <span>Najlepsze życzenia specjalnie dla Ciebie!</span>
                <Image src="/image/for-you.jpeg" width={480} height={480} alt="for-you" />
              </div>
            </div>
            <div className="swiper-slide wishes-slide">
              <div className="slide">
                <span> Rozwoju designerskich skilli 🧑🏻‍🎨 </span>
                <Image src="/image/grafika-pasja.jpg" width={480} height={480} alt="development" />
                <span className="small"> Chociaż twoje projekty i tak są już super 😎 </span>
              </div>
            </div>
            <div className="swiper-slide wishes-slide">
              <div className="slide">
                <span> Żebyś miał czas na wszystko 🙌 </span>
                <Image src="/image/time.gif" width={480} height={480} alt="time" />
              </div>
            </div>
            <div className="swiper-slide wishes-slide">
              <div className="slide">
                <span> Przede wszystkim dla twojej rodziny 👨‍👩‍👧‍👦 </span>
                <Image src="/image/family.jpg" width={480} height={480} alt="family" />
              </div>
            </div>
            <div className="swiper-slide wishes-slide">
              <div className="slide">
                <span> Ale również na samorozwój </span>
                <Image src="/image/gaming.jpeg" width={420} height={480} alt="gaming" />
                <span> i odpoczynek 🎮 </span>
              </div>
            </div>
            <div className="swiper-slide wishes-slide">
              <div className="slide">
                <span> Dużo zdrówka 💉 </span>
                <Image src="/image/zdrowie.jpg" width={320} height={480} alt="zdrowie" />
              </div>
            </div>
            <div className="swiper-slide wishes-slide">
              <div className="slide">
                <span> Dobrej współpracy z całym zespołem </span>
                <Image src="/image/1000.png" width={400} height={480} alt="1000" />
                <span> Żebyśmy szybko dobili do 1000 subów 💸 </span>
              </div>
            </div>
            <div className="swiper-slide wishes-slide">
              <div className="slide">
                <span> Jeszcze raz wszystkiego najlepszego! 🌟 </span>
                <Image src="/image/mikolaj.gif" width={400} height={480} alt="1000" />
              </div>
            </div>
            <div className="swiper-slide wishes-slide">
              <div className="slide">
                <span> Na koniec pytanie </span>
                <span> Czy jesteś zadowolony z prezentu? </span>
                <span className="small"> Spróbuj kliknąć "nie" 👀 </span>
                <div className="flex gap-[64px]">
                  <button
                    onClick={handleYesButtonClick}
                    className="mt-10 bg-white text-red-600 text-[48px] px-10 py-5 rounded-full"
                  >
                    Tak
                  </button>
                  <button
                    ref={buttonRef}
                    onMouseEnter={handleMouseEnter}
                    className="mt-10 bg-white text-red-600 text-[48px] px-10 py-5 rounded-full"
                  >
                    Nie
                  </button>
                </div>
              </div>
            </div>
            <div className="swiper-slide wishes-slide">
              <div className="slide">
                <Image src="/image/shrek-donkey.gif" width={640} height={480} alt="shrek donkey" />
                <button
                  className="mt-10 bg-white text-red-600 text-[48px] px-10 py-5 rounded-full z-100"
                  onClick={onReplayClick}
                >
                  Ja chcę jeszcze raz!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
