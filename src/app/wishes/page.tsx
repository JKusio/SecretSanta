'use client';

export default function Wishes() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-red-600 via-red-600 to-red-700">
      <audio className="hidden" muted autoPlay loop>
        <source src="/audio/jingle-bells.mp3" type="audio/mpeg" />
      </audio>
    </main>
  );
}
