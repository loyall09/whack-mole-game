'use client';
import { useEffect, useState } from "react";

export default function Home() {
  const TOTAL_HOLES = 9;

  const [moleIndex, setMoleIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  // Game Loop
useEffect(() => {
  const interval = setInterval(() => {
    const ranodmIndex = Math.floor(Math.random() * TOTAL_HOLES);
    setMoleIndex(ranodmIndex);
  }, 1000);

  return () => clearInterval(interval);
});

const handleClick = (index: number) => {
  if (index === moleIndex) {
    setScore((prev) => prev + 1);
    setMoleIndex(null); // hide mole when hit;
  }
}
  return (
   <main className="flex flex-col items-center justify-center min-h-screen p-6 gap-4">
      <h1 className="text-3xl font-bold">Whack-a-Mole!</h1>
      <p className="text-xl">Score: {score}</p>

      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: TOTAL_HOLES }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`w-24 h-24 rounded-full border-2 ${
              moleIndex === index ? 'bg-brown-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </main>
  );
}
