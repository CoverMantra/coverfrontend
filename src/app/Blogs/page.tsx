"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaPenNib } from "react-icons/fa";
import { Calendar, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function InsuranceBlogs() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const blogs = [
    {
      id: 10,
      title: "Digital Dreams: Creativity in a Connected World",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqksbeUen4BxKm-YsRtgMugRqvD-UJSmfpg&s",
      description: "In today’s hyper-connected era, creativity is no longer confined to studios or sketchbooks — it lives in every click, post, and pixel.",
      link: "/Blogs/Blog10",
      postedDate: "Sep 30, 2025",
      category: "Technology"
    },
    {
      id: 9,
      title: "The Power of Small Wins: Tiny Achievements, Big Success",
      image: "https://www.thedawoodibohras.com/wp-content/uploads/2019/07/Failure_Success-blog-featured-image-862x559.jpg",
      description: "Discover how celebrating small victories every day can build confidence, motivation, and momentum toward achieving your biggest goals.",
      link: "/Blogs/Blog9",
      postedDate: "Sep 26, 2025",
      category: "Mindset"
    },
    {
      id: 8,
      title: "How Minimalism in a Digital World Can Boost Creativity",
      image: "https://i.postimg.cc/GpcsDLJL/abstract-still-life-universe-composition.jpg",
      description: "Discover how simplifying your digital life—reducing apps, notifications, and online clutter—can free your mind and unlock potential.",
      link: "/Blogs/Blog8",
      postedDate: "Sep 25, 2025",
      category: "Lifestyle"
    },
    {
      id: 7,
      title: "The Power of Cloud Computing in Today's World",
      image: "https://i.postimg.cc/2j14k5Sh/saas-concept-collage.jpg",
      description: "Cloud Computing is a modern technology that delivers computing services such as storage, servers, and databases over the internet.",
      link: "/Blogs/Blog7",
      postedDate: "Sep 20, 2025",
      category: "Innovation"
    },
    {
      id: 6,
      title: "Social Media Impact on Emotions and Mental Health",
      image: "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
      description: "Social media has become an integral part of our daily lives, connecting us to friends, family, and the wider world.",
      link: "/Blogs/Blog6",
      postedDate: "Sep 17, 2025",
      category: "Health"
    },
    {
      id: 5,
      title: "Smart Money Habits for Young Professionals",
      image: "https://thumbs.dreamstime.com/b/hand-holding-coins-to-stack-growth-plant-step-concept-saving-money-finance-accounting-135832008.jpg",
      description: "Learn how to manage your money wisely with simple yet powerful financial habits. From saving first to smart investing.",
      link: "/Blogs/Blog5",
      postedDate: "Sep 15, 2025",
      category: "Finance"
    },
    {
      id: 4,
      title: "Generative AI : How AI is Reshaping Our Daily Lives",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovrc4wL1lzSZzK1c0vKxxIfqRwOZ_2zTDcg&s",
      description: "Generative Artificial Intelligence (AI) tools like ChatGPT and Midjourney have burst from the lab into the mainstream.",
      link: "/Blogs/Blog4",
      postedDate: "Sep 12, 2025",
      category: "AI"
    },
    {
      id: 3,
      title: "Thriving Solo: The Power of Living Alone",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*45811YXR0NM3HUYx",
      description: "Living alone is your chance to grow stronger, bolder, and more independent. Trust yourself and embrace life.",
      link: "/Blogs/Blog3",
      postedDate: "Sep 10, 2025",
      category: "Growth"
    },
    {
      id: 2,
      title: "Stop Wasting Money: Choosing the Right Loan",
      image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202501/business-loan-273540286-1x1.jpg?VersionId=etpS79p3_nAVVNXxHms5h5ioCAD9pJqo",
      description: "Choosing the right insurance policy can be confusing. Here's how to compare plans and select the one that suits your needs.",
      link: "/Blogs/Blog2",
      postedDate: "Sep 7, 2025",
      category: "Finance"
    },
    {
      id: 1,
      title: "Understanding Insurance: Financial Security Foundation",
      image: "https://media.istockphoto.com/id/1226082621/photo/insurance-concept-stack-of-wooden-blocks-with-words-life-health-legal-expenses-business-house.jpg?s=612x612&w=0&k=20&c=5bKk7pRl9jewZM_nmIquyGOj4Q7BVNiYRcJC9H1smfE=",
      description: "Protect what matters most. Insurance offers financial security against life's unexpected events and giving you peace of mind.",
      link: "/Blogs/Blog1",
      postedDate: "Sep 5, 2025",
      category: "Security"
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF4E5] font-sans selection:bg-blue-500 selection:text-white pb-20">
      
      {/* 🎭 HERO HEADER */}
      <header className="relative bg-[#08101E] pt-32 pb-24 px-6 rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-bold mb-6">
            <Sparkles size={16} /> Insightful Perspectives Daily
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 uppercase italic">
            Knowledge <span className="text-blue-500">Unleashed</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of technology, finance, and creative living through expert storytelling.
          </p>
        </div>
      </header>

      {/* 📚 BLOG GRID */}
      <main className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <article
              key={blog.id}
              className="group bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-blue-200"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#08101E]/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                  {blog.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#08101E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <span className="text-white font-bold flex items-center gap-2 text-sm italic">Explore Article <ArrowRight size={14}/></span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                  <Calendar size={14} className="text-blue-500" />
                  {blog.postedDate}
                </div>
                
                <h2 className="text-xl md:text-2xl font-black text-[#08101E] mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h2>
                
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 line-clamp-3">
                  {blog.description}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <button
                    onClick={() => router.push(blog.link)}
                    className="flex items-center gap-2 text-[#08101E] font-black text-sm uppercase tracking-tighter group/btn"
                  >
                    Read More 
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all">
                      <BookOpen size={14} />
                    </div>
                  </button>
                  <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:animate-ping" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 📬 NEWSLETTER SECTION */}
        <section className="mt-24 bg-[#08101E] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden" data-aos="zoom-in">
          <div className="absolute top-0 right-0 p-10 opacity-5 text-blue-500">
             <FaPenNib size={200} />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-6">Never Miss a <span className="text-blue-500">Story</span></h2>
             <p className="text-gray-400 mb-10 font-medium">Join 50,000+ readers who receive our curated weekly insights directly in their inbox.</p>
             <div className="flex flex-col sm:flex-row gap-4 bg-white/5 p-2 rounded-3xl border border-white/10 backdrop-blur-md">
                <input 
                  type="email" 
                  placeholder="Your premium email address" 
                  className="bg-transparent flex-1 px-6 py-4 outline-none text-white placeholder:text-gray-500 font-bold"
                />
                <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-tighter hover:bg-blue-700 transition transform active:scale-95">
                  Subscribe
                </button>
             </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 text-center text-gray-400 font-bold uppercase tracking-[0.4em] text-[10px]">
        Designed for Modern Storytellers © 2026
      </footer>
    </div>
  );
}