"use client";
import React from 'react';
interface TableData {
  headers: string[];
  rows: string[][];
}
interface ToolItem {
  name: string;
  description: string;
}

interface ToolCategory {
  title: string;
  icon: string; 
  tools: ToolItem[];
}

interface Section {
  title: string;
  content: string[];
  type: 'prose' | 'table' | 'list' | 'showcase';
  motivationalTakeaway?: string;
  list?: string[];
  table?: TableData;
  showcase?: ToolCategory[]; 
}

interface BlogContent {
  title: string;
  subtitle: string;
  sections: Section[];
}

const blogContent: BlogContent = {
  title: "Generative AI in Everyday Life: How AI is Reshaping Our Daily Lives and What It Means for the Future of Work",
  subtitle: "From Smart Assistants to Creative Partners - How AI is Revolutionizing Daily Tasks and Boosting Productivity",
  sections: [
    {
      title: "Introduction: AI is Already Here - Are You Using It?",
      content: [
        "Remember when AI felt like science fiction? Today, **generative AI tools** are seamlessly integrated into our daily routines, making us more efficient, creative, and productive. The revolution isn't coming—it's already here, and it's transforming how we work, learn, and create.",
        "From writing emails to designing presentations, generative AI has moved from novelty to necessity. Let's explore the real, practical applications that are changing lives right now."
      ],
      type: "prose",
    },
    {
      title: "Supercharge Your Work & Productivity",
      content: [
        "Generative AI is becoming the ultimate productivity partner for professionals across industries. Here's how it's making work easier and more efficient:",
      ],
      table: {
        headers: ["Use Case", "How AI Helps", "Popular Tools"],
        rows: [
          ["**Email & Communication**", "Drafts professional emails, improves tone, generates quick responses", "Grammarly, ChatGPT, Gmail Smart Compose"],
          ["**Content Creation**", "Writes blog posts, social media content, marketing copy in minutes", "Jasper, Copy.ai, Claude"],
          ["**Presentation Design**", "Creates slide decks, suggests layouts, generates visuals", "Gamma, Beautiful.ai, Canva AI"],
          ["**Data Analysis**", "Summarizes reports, identifies trends, creates insights from data", "ChatGPT Advanced Analytics, Microsoft Copilot"],
          ["**Meeting Efficiency**", "Transcribes calls, generates meeting notes, tracks action items", "Otter.ai, Fireflies.ai, Zoom AI Companion"]
        ]
      },
      type: "table",
      motivationalTakeaway: "Stop spending hours on routine tasks. Let AI handle the groundwork while you focus on strategy and creativity. **Your time is your most valuable asset—AI helps you reclaim it.**",
    },
    {
      title: "Transform Your Learning & Education",
      content: [
        "AI is revolutionizing how we learn and acquire new skills, making education more personalized and accessible than ever before.",
      ],
      list: [
        "**Personalized Tutoring**: AI adapts to your learning style, provides instant explanations, and creates custom study plans",
        "**Language Learning**: Practice conversations with AI tutors that never get tired and provide real-time feedback",
        "**Research Assistance**: Quickly summarize complex papers, generate literature reviews, and find relevant sources",
        "**Skill Development**: Get step-by-step guidance for learning coding, design, writing, or any new skill",
        "**Homework Help**: AI explains difficult concepts and helps you work through problems without just giving answers"
      ],
      type: "list",
    },
    {
      title: "The Developer's New Co-pilot: Coding and Debugging",
      content: [
        "For developers and anyone who touches code, generative AI has become an indispensable co-pilot. It accelerates development cycles and makes complex tasks manageable.",
      ],
      list: [
        "**Code Generation**: Quickly generate boilerplate code, functions, or entire components from a simple natural language prompt.",
        "**Debugging**: AI can analyze error messages, suggest fixes, and explain *why* a particular piece of code is failing.",
        "**Code Review & Refactoring**: Get instant feedback on code quality, security vulnerabilities, and suggestions for improving performance.",
        "**Documentation**: Generate comprehensive and accurate documentation for your codebase automatically, saving countless hours.",
        "**Learning New Languages**: Ask the AI to explain concepts, show working examples, or translate code snippets between languages."
      ],
      type: "list",
      motivationalTakeaway: "AI doesn't replace the programmer; it **supercharges the programmer**. Embrace it to write less boilerplate and focus on solving bigger, more complex problems.",
    },
    {
      title: "Enhance Your Creativity & Personal Projects",
      content: [
        "Whether you're a professional artist or someone who just wants to create, AI is democratizing creativity and making artistic expression more accessible. Here are three major creative areas AI can assist with:",
      ],
      list: [ 
        "**Visual Art & Design**: Generate unique images, create logos, design social media graphics, or visualize concepts that were previously limited by your drawing skills (e.g., Midjourney, DALL-E).",
        "**Writing & Storytelling**: Overcome writer's block, brainstorm ideas, get feedback on your writing, or co-write stories and scripts (e.g., Sudowrite, Jasper).",
        "**Music & Audio**: Compose original music, create background scores, generate voiceovers, or remix existing audio content (e.g., Suno, ElevenLabs)."
      ],
      type: "list",
      motivationalTakeaway: "You don't need to be a professional artist to create amazing work. **AI amplifies your creative vision** and helps bring your ideas to life, regardless of your technical skills.",
    },
    {
      title: "Your Essential AI Toolkit",
      content: [
        "Ready to start? Here are some of the most popular generative AI tools categorized by their primary use case.",
      ],
      type: "showcase",
      showcase: [
        {
          title: "Chat & Writing",
          icon: "✍️",
          tools: [
            { name: "ChatGPT (OpenAI)", description: "General AI assistant and excellent writer." },
            { name: "Claude (Anthropic)", description: "Advanced reasoning and long-context processing." },
            { name: "GrammarlyGo", description: "Writing enhancement and quick drafting." },
          ]
        },
        {
          title: "Coding & Development",
          icon: "💻",
          tools: [
            { name: "GitHub Copilot", description: "In-editor code suggestions and function generation." },
            { name: "Code Llama", description: "Open-source large language model for code." },
            { name: "Tabnine", description: "AI code completions for various IDEs." },
          ]
        },
        {
          title: "Design & Creative",
          icon: "🎨",
          tools: [
            { name: "Midjourney", description: "High-quality, artistic image generation." },
            { name: "DALL-E 3 (OpenAI)", description: "AI artwork integrated into ChatGPT and Bing." },
            { name: "Runway", description: "Text-to-video and video editing tools." },
          ]
        },
      ]
    },
    {
      title: "Conclusion: Your AI-Powered Future Starts Today",
      content: [
        "Generative AI isn't about replacing human intelligence—it's about **augmenting it**. It's the calculator for creative work, the GPS for complex problems, the personal assistant that never sleeps.",
        "The people who thrive in this new era won't be those who fear AI, but those who embrace it as a powerful tool for amplifying their abilities and achieving their goals faster.",
        "You have two choices: watch the AI revolution from the sidelines, or grab the tools and start building your AI-enhanced life today. The technology is here, it's accessible, and it's waiting for you to put it to work.",
        "**Your AI-powered productivity boost is just one prompt away.**"
      ],
      type: "prose",
    },
  ],
};

interface ProseBlockProps {
  content: string[];
}

interface MotivationalBoxProps {
  text: string;
}

interface TableBlockProps {
  table: TableData;
}

interface ListBlockProps {
  list: string[];
}

interface ShowcaseBlockProps {
  showcase: ToolCategory[];
}

const ProseBlock: React.FC<ProseBlockProps> = ({ content }) => (
  <div className="space-y-4">
    {content.map((p, i) => (
      <p key={i} className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
    ))}
  </div>
);

const MotivationalBox: React.FC<MotivationalBoxProps> = ({ text }) => (
  <div className="my-8 p-6 bg-purple-50 border-l-4 border-purple-500 rounded-lg shadow-inner">
    <h4 className="text-xl font-semibold text-purple-800 mb-2">💡 Pro Tip:</h4>
    <p className="text-purple-700 font-medium" dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
  </div>
);

const TableBlock: React.FC<TableBlockProps> = ({ table }) => (
  <div className="my-8 overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-300 border border-gray-200 rounded-lg shadow-sm">
      <thead className="bg-purple-50">
        <tr>
          {table.headers.map((header, i) => (
            <th key={i} scope="col" className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {table.rows.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50 transition-colors">
            {row.map((cell, j) => (
              <td key={j} className="px-6 py-4 text-sm text-gray-800" dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ListBlock: React.FC<ListBlockProps> = ({ list }) => (
  <ul className="list-disc pl-6 space-y-3 my-6 text-gray-700">
    {list.map((item, i) => (
      <li key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
    ))}
  </ul>
);
const AIToolsShowcase: React.FC<ShowcaseBlockProps> = ({ showcase }) => (
  <div className="my-10 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-purple-200 shadow-lg">
    <h3 className="text-2xl font-extrabold text-gray-900 mb-6 border-b pb-3 border-purple-200">🚀 Your Essential AI Toolkit</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {showcase.map((category, i) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow-md transition-shadow hover:shadow-lg">
          <h4 className="flex items-center text-lg font-bold text-purple-700 mb-3">
            <span className="text-2xl mr-2">{category.icon}</span>
            {category.title}
          </h4>
          <ul className="text-sm text-gray-600 space-y-2">
            {category.tools.map((tool, j) => (
              <li key={j} className="border-l-2 border-blue-300 pl-3">
                <strong className="text-gray-800">{tool.name}</strong>: {tool.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white shadow-xl border-b border-purple-100">
        <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8"> 
          <div className="text-center">
            <div className="inline-flex mt-15 items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4"> {/* Reduced size */}
              <span className="text-3xl">🤖</span> 
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-3"> {/* Adjusted title size */}
              {blogContent.title}
            </h1>
            <p className="text-xl text-purple-600 italic">
              {blogContent.subtitle}
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-4">
        <article className="bg-white rounded-3xl shadow-2xl p-6 md:p-12">
          {blogContent.sections.map((section, index) => (
            <section key={index} className="mb-10 last:mb-0">
              
              <h2 className={`text-3xl font-bold ${index === 0 ? 'text-purple-700' : 'text-gray-900'} mb-6 pb-3 border-b border-gray-200`}>
                {section.title}
              </h2>
              {section.type === 'prose' && <ProseBlock content={section.content} />}
              
              {section.type === 'table' && section.table && (
                <>
                  <ProseBlock content={section.content} />
                  <TableBlock table={section.table} />
                </>
              )}
              
              {section.type === 'list' && section.list && (
                <>
                  <ProseBlock content={section.content} />
                  <ListBlock list={section.list} />
                </>
              )}
              
              {section.type === 'showcase' && section.showcase && (
                <>
                  <ProseBlock content={section.content} />
                  <AIToolsShowcase showcase={section.showcase} />
                </>
              )}
             {section.motivationalTakeaway && <MotivationalBox text={section.motivationalTakeaway} />}
            </section>
          ))}
        </article>
      </main>
    </div>
  );
}