"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Interface definitions (Logic preserved as per request)
interface TableData { headers: string[]; rows: string[][]; }
interface ToolItem { name: string; description: string; }
interface ToolCategory { title: string; icon: string; tools: ToolItem[]; }
interface Section {
  title: string;
  content: string[];
  type: 'prose' | 'table' | 'list' | 'showcase';
  motivationalTakeaway?: string;
  list?: string[];
  table?: TableData;
  showcase?: ToolCategory[];
}
interface BlogContent { title: string; subtitle: string; sections: Section[]; }

const blogContent: BlogContent = {
  title: "Generative AI in Everyday Life",
  subtitle: "From Smart Assistants to Creative Partners — Reshaping the Future of Work",
  sections: [
    {
      title: "Introduction: AI is Already Here",
      content: [
        "Remember when AI felt like science fiction? Today, **generative AI tools** are seamlessly integrated into our daily routines, making us more efficient, creative, and productive. The revolution isn't coming—it's already here, and it's transforming how we work, learn, and create.",
        "From writing emails to designing presentations, generative AI has moved from novelty to necessity. Let's explore the real, practical applications that are changing lives right now."
      ],
      type: "prose",
    },
    {
      title: "Supercharge Your Productivity",
      content: ["Generative AI is becoming the ultimate productivity partner. Here's how it's making work easier:"],
      table: {
        headers: ["Use Case", "How AI Helps", "Popular Tools"],
        rows: [
          ["**Email & Communication**", "Drafts professional emails, improves tone", "Grammarly, ChatGPT"],
          ["**Content Creation**", "Writes blog posts, social media content", "Jasper, Claude"],
          ["**Presentation Design**", "Creates slide decks, suggests layouts", "Gamma, Beautiful.ai"],
          ["**Data Analysis**", "Summarizes reports, identifies trends", "Microsoft Copilot"],
          ["**Meeting Efficiency**", "Transcribes calls, generates meeting notes", "Otter.ai, Fireflies.ai"]
        ]
      },
      type: "table",
      motivationalTakeaway: "Stop spending hours on routine tasks. **Your time is your most valuable asset—AI helps you reclaim it.**",
    },
    {
      title: "Transform Your Learning",
      content: ["AI is revolutionizing how we acquire new skills, making education more personalized."],
      list: [
        "**Personalized Tutoring**: AI adapts to your learning style and study plans.",
        "**Language Learning**: Practice conversations with AI tutors in real-time.",
        "**Research Assistance**: Summarize complex papers and find relevant sources.",
        "**Skill Development**: Get step-by-step guidance for coding or design."
      ],
      type: "list",
    },
    {
      title: "The Developer's Co-pilot",
      content: ["For developers, generative AI has become an indispensable tool for speed and accuracy."],
      list: [
        "**Code Generation**: Quickly generate boilerplate code from natural language.",
        "**Debugging**: AI analyzes error messages and suggests immediate fixes.",
        "**Documentation**: Generate comprehensive documentation for your codebase.",
        "**Learning New Languages**: Translate code snippets between languages effortlessly."
      ],
      type: "list",
      motivationalTakeaway: "AI doesn't replace the programmer; it **supercharges the programmer**.",
    },
    {
      title: "Enhance Your Creativity",
      content: ["AI is democratizing creativity, making artistic expression more accessible than ever."],
      list: [
        "**Visual Art & Design**: Generate unique images and logos (Midjourney, DALL-E).",
        "**Writing & Storytelling**: Overcome writer's block and co-write scripts.",
        "**Music & Audio**: Compose original music and generate high-quality voiceovers."
      ],
      type: "list",
      motivationalTakeaway: "**AI amplifies your creative vision** and helps bring your ideas to life.",
    },
    {
      title: "Your Essential AI Toolkit",
      content: ["Ready to start? Here are the must-have tools categorized by use case."],
      type: "showcase",
      showcase: [
        {
          title: "Chat & Writing", icon: "✍️",
          tools: [
            { name: "ChatGPT", description: "General assistant and excellent writer." },
            { name: "Claude", description: "Advanced reasoning and long processing." }
          ]
        },
        {
          title: "Coding", icon: "💻",
          tools: [
            { name: "GitHub Copilot", description: "In-editor code suggestions." },
            { name: "Tabnine", description: "AI completions for various IDEs." }
          ]
        },
        {
          title: "Creative", icon: "🎨",
          tools: [
            { name: "Midjourney", description: "High-quality artistic image generation." },
            { name: "Runway", description: "Cutting-edge text-to-video tools." }
          ]
        },
      ]
    },
    {
      title: "Conclusion: The Future is Today",
      content: [
        "Generative AI is about **augmenting human intelligence**. It's the calculator for creative work, the GPS for complex problems.",
        "The people who thrive will be those who embrace it as a powerful tool for amplifying their abilities.",
        "**Your AI-powered productivity boost is just one prompt away.**"
      ],
      type: "prose",
    },
  ],
};

// --- Blocks (Logic Kept Intact, UI Upgraded) ---

const ProseBlock: React.FC<{ content: string[] }> = ({ content }) => (
  <div className="space-y-6">
    {content.map((p, i) => (
      <p key={i} className="text-gray-400 text-lg leading-relaxed font-medium" 
         dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-black">$1</span>') }} />
    ))}
  </div>
);

const MotivationalBox: React.FC<{ text: string }> = ({ text }) => (
  <div className="my-10 p-8 bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-l-4 border-cyan-400 rounded-2xl backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.1)]">
    <div className="flex items-center gap-3 mb-3 text-cyan-400 font-black uppercase tracking-widest text-xs">
      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" /> Pro Insights
    </div>
    <p className="text-gray-200 text-xl italic leading-snug" 
       dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<span class="text-cyan-400 font-bold">$1</span>') }} />
  </div>
);

const TableBlock: React.FC<{ table: TableData }> = ({ table }) => (
  <div className="my-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-white/10">
            {table.headers.map((h, i) => (
              <th key={i} className="px-6 py-5 text-cyan-400 uppercase text-xs font-black tracking-widest">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {table.rows.map((row, i) => (
            <tr key={i} className="hover:bg-white/5 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-6 py-5 text-sm text-gray-300" 
                    dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-bold">$1</span>') }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ListBlock: React.FC<{ list: string[] }> = ({ list }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
    {list.map((item, i) => (
      <div key={i} className="p-5 bg-[#121826] border border-white/5 rounded-2xl flex items-start gap-4 hover:border-purple-500/50 transition-all group">
        <div className="mt-1 w-2 h-2 rounded-full bg-purple-500 group-hover:shadow-[0_0_10px_#a855f7]" />
        <span className="text-gray-300 text-sm leading-relaxed" 
              dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-bold">$1</span>') }} />
      </div>
    ))}
  </div>
);

const AIToolsShowcase: React.FC<{ showcase: ToolCategory[] }> = ({ showcase }) => (
  <div className="my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {showcase.map((cat, i) => (
      <div key={i} className="p-6 bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] border border-white/10 hover:shadow-2xl hover:shadow-purple-500/10 transition-all">
        <div className="text-4xl mb-4">{cat.icon}</div>
        <h4 className="text-xl font-black text-white uppercase italic mb-4 tracking-tighter">{cat.title}</h4>
        <ul className="space-y-3">
          {cat.tools.map((t, j) => (
            <li key={j} className="text-xs text-gray-400 leading-tight">
              <span className="text-cyan-400 font-bold block mb-1 uppercase tracking-tighter">{t.name}</span>
              {t.description}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

// --- Main Page Component ---

export default function BlogPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-[#080B14] text-white selection:bg-cyan-500 selection:text-black font-sans">
      
      {/* 🔮 NEON HERO HEADER */}
      <header className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-purple-600/20 to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" /> Global AI Trends 2026
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8">
            Reshaping <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600">Daily Life</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-tight italic">
            {blogContent.subtitle}
          </p>
        </div>
      </header>

      {/* 🚀 MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Article Container */}
          <article className="lg:col-span-12 space-y-20">
            {blogContent.sections.map((section, idx) => (
              <section key={idx} className="relative" data-aos="fade-up">
                
                {/* Section Title with Tech-Accent */}
                <div className="flex items-center gap-4 mb-10">
                   <span className="text-cyan-400 font-mono text-sm tracking-tighter">0{idx + 1} //</span>
                   <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter border-b border-white/10 pb-4 w-full">
                    {section.title}
                   </h2>
                </div>

                {/* Content Logic Rendering */}
                <div className="relative z-10">
                  {section.type === 'prose' && <ProseBlock content={section.content} />}
                  
                  {section.type === 'table' && (
                    <>
                      <ProseBlock content={section.content} />
                      <TableBlock table={section.table!} />
                    </>
                  )}
                  
                  {section.type === 'list' && (
                    <>
                      <ProseBlock content={section.content} />
                      <ListBlock list={section.list!} />
                    </>
                  )}
                  
                  {section.type === 'showcase' && (
                    <>
                      <ProseBlock content={section.content} />
                      <AIToolsShowcase showcase={section.showcase!} />
                    </>
                  )}

                  {section.motivationalTakeaway && (
                    <MotivationalBox text={section.motivationalTakeaway} />
                  )}
                </div>
              </section>
            ))}
          </article>
        </div>
      </main>

      {/* 🏁 FUTURISTIC FOOTER */}
      <footer className="bg-black py-20 px-6 border-t border-white/5 rounded-t-[3rem] md:rounded-t-[6rem]">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="text-6xl">🤖</div>
          <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
            Your Future is <span className="text-cyan-400 italic">One Prompt</span> Away
          </h3>
          <p className="text-gray-500 text-xs font-black uppercase tracking-[0.5em]">
            AI Integration Studio © 2026 • Build the Future Today
          </p>
        </div>
      </footer>
    </div>
  );
}