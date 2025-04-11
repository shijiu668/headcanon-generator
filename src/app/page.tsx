'use client';

import { useState, useCallback, useMemo } from 'react';
import { headcanons } from '@/data/headcanons';

export default function Home() {
  const [characterName, setCharacterName] = useState('');
  const [headcanon, setHeadcanon] = useState('');
  const [buttonGradient, setButtonGradient] = useState('from-blue-500 to-blue-600');

  const gradientColors = useMemo(() => [
    'from-blue-500 to-blue-600',
    'from-purple-500 to-pink-500',
    'from-green-400 to-cyan-500',
    'from-yellow-400 to-orange-500',
    'from-pink-500 to-rose-500',
    'from-indigo-500 to-purple-500',
    'from-cyan-500 to-blue-500',
    'from-emerald-500 to-green-500'
  ], []);

  const generateHeadcanon = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * headcanons.length);
    const selectedHeadcanon = headcanons[randomIndex];
    const prefix = characterName.trim() ? characterName.trim() : 'This character';
    setHeadcanon(`${prefix} ${selectedHeadcanon}`);
    const randomColorIndex = Math.floor(Math.random() * gradientColors.length);
    setButtonGradient(gradientColors[randomColorIndex]);
  }, [characterName, gradientColors]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
          Headcanon Generator
        </h1>
        
        <div className="space-y-8">
          <div className="relative">
            <input
              type="text"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              placeholder="Enter character name (optional)"
              className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>

          <button
            onClick={generateHeadcanon}
            className={`w-full px-6 py-4 rounded-2xl bg-gradient-to-r ${buttonGradient} hover:opacity-90 text-white font-semibold shadow-lg hover:shadow-xl transition duration-200 transform hover:scale-[1.02] active:scale-[0.98]`}
          >
            Generate Headcanon
          </button>

          {headcanon && (
            <div className="mt-8 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
              <p className="text-lg text-gray-900 dark:text-gray-100 leading-relaxed">
                {headcanon}
              </p>
            </div>
          )}
        </div>
      </main>

      <section className="container mx-auto px-4 py-16 max-w-4xl space-y-24">
        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 shadow-xl">
          <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Introduce</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">What is Headcanon?</h3>
              <p className="text-gray-600 dark:text-gray-400">Headcanon refers to elements and interpretations of a fictional universe accepted by an individual fan, but not found within or supported by the official canon.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Why Use a Generator?</h3>
              <p className="text-gray-600 dark:text-gray-400">Our generator helps spark creativity by providing unique and interesting character traits that you might not have thought of otherwise.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Creative Freedom</h3>
              <p className="text-gray-600 dark:text-gray-400">Use these generated headcanons as inspiration, modify them to fit your needs, or let them spark entirely new ideas.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 shadow-xl">
          <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-400">How to Use</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Enter a Character Name</h3>
              <p className="text-gray-600 dark:text-gray-400">Start by typing your character&apos;s name in the input field. This is optional - if you leave it blank, the generator will use &quot;This character&quot; instead.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Generate Ideas</h3>
              <p className="text-gray-600 dark:text-gray-400">Click the &quot;Generate Headcanon&quot; button to receive a random character trait or quirk. Each click generates a new and unique headcanon.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Save Your Favorites</h3>
              <p className="text-gray-600 dark:text-gray-400">When you find a headcanon you like, make sure to save it somewhere safe. Keep generating until you find the perfect traits for your character.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 shadow-xl">
          <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-400">Advantages</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Instant Inspiration</h3>
              <p className="text-gray-600 dark:text-gray-400">Break through writer&apos;s block and find instant inspiration with our diverse collection of character traits and quirks.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Character Development</h3>
              <p className="text-gray-600 dark:text-gray-400">Add depth and personality to your characters with unique traits that make them more memorable and relatable.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Time-Saving</h3>
              <p className="text-gray-600 dark:text-gray-400">Save time brainstorming character traits and focus more on developing your story or creative project.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}