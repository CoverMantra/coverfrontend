'use client';
import React, { useState, useEffect } from 'react';
import { Lightbulb, Zap, Feather, Sparkles, Brain, Users, Globe, Palette } from 'lucide-react';

const BlogContent = () => {
  return (
    <div className="max-w-3xl mx-auto mt-15 px-4 sm:px-6 lg:px-8 py-10 bg-white shadow-lg rounded-2xl border border-gray-100">
      
      {/* Header Section */}
      <header className="text-center mb-10 mt-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 text-indigo-700 tracking-tight leading-tight">
          <Palette className="inline w-8 h-8 mr-2 text-indigo-500" />
          The Art of Staying Creative in the Age of AI
        </h1>
        
      </header>

      {/* Body Content */}
      <div className="space-y-6 text-gray-700 text-base sm:text-[15px] leading-relaxed">
        <p className="indent-8 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-indigo-600">
          We live in an extraordinary time — a world where <strong>art meets
          algorithms</strong>, and creativity is no longer limited to brushes,
          words, or instruments. In 2025, creativity is being redefined by the
          rise of AI tools, social media, and global collaboration. But amidst
          all this tech, one truth remains — real creativity still begins with a
          human spark.
        </p>

        {/* Section 1: Inspiration */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 border-b pb-2 mb-3 flex items-center">
            <Globe className="w-6 h-6 mr-2 text-indigo-500" />
            1. Inspiration is Everywhere
          </h2>
          <p>
            The creative world today is borderless. A designer in India can
            collaborate with a musician in Spain, and an AI tool can turn your
            doodle into a 3D concept. Inspiration isn’t rare — it’s overflowing.
            What’s rare is <em className="text-indigo-600 font-medium">focus</em> — the ability to pause and let an idea
            breathe before moving to the next one.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-lg mt-3 flex items-start">
            <Lightbulb className="w-5 h-5 mr-2 mt-1 text-amber-600 flex-shrink-0" />
            <p><strong>Try this:</strong> Go on a “digital detox day” every week.
            Creativity thrives in silence as much as in chaos.</p>
          </div>
        </section>

        {/* Section 2: AI Partner */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 border-b pb-2 mb-3 flex items-center">
            <Brain className="w-6 h-6 mr-2 text-indigo-500" />
            2. When AI Becomes Your Creative Partner
          </h2>
          <p>
            AI can’t replace creativity — but it can <strong>enhance</strong> it.
            Writers use AI for brainstorming, artists use it to explore new
            styles, and developers use it to generate ideas in seconds. The trick
            is not to fear AI, but to <em className="text-indigo-600 font-medium">collaborate</em> with it.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-3 rounded-lg mt-3 flex items-start">
            <Sparkles className="w-5 h-5 mr-2 mt-1 text-indigo-600 flex-shrink-0" />
            <p><strong>Example:</strong> Use tools like ChatGPT, Midjourney, or
            Runway ML to visualize your imagination faster — but keep your unique
            voice intact.</p>
          </div>
        </section>

        {/* Section 3: Multi-Creator */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 border-b pb-2 mb-3 flex items-center">
            <Feather className="w-6 h-6 mr-2 text-indigo-500" />
            3. The Rise of the Multi-Creator
          </h2>
          <p>
            The 2025 creator isn’t “just” a writer or “just” a designer — they’re
            everything. A coder who paints. A marketer who podcasts. A
            photographer who writes poetry. The lines between professions are
            fading, and creativity is about combining passions, not choosing one.
          </p>
          <blockquote className="italic border-l-4 border-gray-300 pl-4 py-2 text-gray-500 mt-3 bg-gray-50 rounded-r-lg text-[15px]">
            “Creativity is connecting the unconnected.”
          </blockquote>
        </section>

        {/* Section 4: Consistency */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 border-b pb-2 mb-3 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-indigo-500" />
            4. Consistency Beats Perfection
          </h2>
          <p>
            In a world obsessed with viral success, consistency is your
            superpower. Post that reel. Write that blog. Share that design.
            Perfection kills progress. Creativity grows only when you{" "}
            <strong className="text-indigo-600">keep creating</strong> — even when no one’s watching.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-lg mt-3 flex items-start">
            <Lightbulb className="w-5 h-5 mr-2 mt-1 text-amber-600 flex-shrink-0" />
            <p><strong>Tip:</strong> Create one thing every day — no matter how
            small. Over time, you’ll build creative momentum.</p>
          </div>
        </section>
        
        {/* Section 5: Community */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 border-b pb-2 mb-3 flex items-center">
            <Users className="w-6 h-6 mr-2 text-indigo-500" />
            5. Community is the New Canvas
          </h2>
          <p>
            Modern creativity is social. Online communities on platforms like{" "}
            <strong>Discord, Behance, and X</strong> are the new studios and art
            galleries. Collaboration breeds innovation — and feedback fuels
            growth.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-3 rounded-lg mt-3 flex items-start">
            <Globe className="w-5 h-5 mr-2 mt-1 text-indigo-600 flex-shrink-0" />
            <p><strong>Try this:</strong> Join a small creator community or start
            your own “creative challenge” group. Create together. Learn together.
            Grow together.</p>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 border-b pb-2 mb-3">
            <Sparkles className="inline w-6 h-6 mr-2 text-indigo-500" />
            Conclusion
          </h2>
          <p>
            The creative life in 2025 is a blend of{" "}
            <strong className="text-indigo-600">imagination, technology, and courage</strong>. 
            AI may help you paint faster, but only you can give art its soul. Keep experimenting,
            keep expressing, and remember —{" "}
            <em className="font-semibold italic block mt-3 text-center text-indigo-700">
              creativity is not about being the best; it’s about being yourself.
            </em>
          </p>
        </section>

        <p className="font-semibold text-center text-indigo-700 mt-10 text-lg border-t pt-5">
          🖋️ So open your mind, grab your tools, and create something that only you can.
        </p>
      </div>

    
     
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-4 sm:p-6">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-indigo-500"></div>
          <p className="ml-3 text-indigo-600 font-medium text-base">Loading creativity...</p>
        </div>
      ) : (
        <BlogContent />
      )}
    </div>
  );
};

export default App;
