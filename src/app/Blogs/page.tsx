"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {FaPenNib } from "react-icons/fa";
export default function InsuranceBlogs() {
  const router = useRouter();
  const blogs = [
    {
      id: 10,
      title: "Digital Dreams: Creativity in a Connected World",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqksbeUen4BxKm-YsRtgMugRqvD-UJSmfpg&s",
      description:
        "In today’s hyper-connected era, creativity is no longer confined to studios or sketchbooks — it lives in every click, post, and pixel. “Digital Dreams: Creativity in a Connected World” explores how technology, AI, and global collaboration are transforming the way we create, express, and share ideas. Discover how modern creators are blending imagination with innovation to shape the art of tomorrow.",
      link: "/Blogs/Blog10",
      postedDate: "Sep 30, 2025", 
    }, 
     {
      id: 9,
      title: "The Power of Small Wins: How Tiny Achievements Lead to Big Success",
      image:
        "https://www.thedawoodibohras.com/wp-content/uploads/2019/07/Failure_Success-blog-featured-image-862x559.jpg",
      description:
        "Discover how celebrating small victories every day can build confidence, motivation, and momentum toward achieving your biggest goals.By breaking big goals into manageable steps, celebrating incremental progress, and building confidence along the way, even the smallest victories can inspire motivation, improve habits.",
      link: "/Blogs/Blog9",
      postedDate: "Sep 26, 2025", 
    }, 
     {
      id: 8,
      title: "How Minimalism in a Digital World Can Boost Creativity",
      image:
        "https://i.postimg.cc/GpcsDLJL/abstract-still-life-universe-composition.jpg",
      description:
        "Discover how simplifying your digital life—reducing apps, notifications, and online clutter—can free your mind, improve focus, and unlock your creative potential. Learn practical tips to embrace digital minimalism and boost your productivity and imagination.",
      link: "/Blogs/Blog8",
      postedDate: "Sep 25, 2025",
    }, 
    {
      id: 7,
      title: "The Power of Cloud Computing in Today's World",
      image:
        "https://i.postimg.cc/2j14k5Sh/saas-concept-collage.jpg",
      description:
        "Cloud Computing is a modern technology that dellivers computing services-such as storage, servers, databases, networking, and software-over the inteernet, also known as “the cloud.” Instead of buying and maintaining physical hardware or software, users can access and use these resources on demand from anywhere.",
      link: "/Blogs/Blog7",
      postedDate: "Sep 20, 2025",
    }, 
    {
      id: 6,
      title: "Social Media Impact on Emotions and Mental Health",
      image:
        "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
      description:
        "Social media has become an integral part of our daily lives, connecting us to friends, family, and the wider world. While it offers opportunities for self-expression, learning, and building communities, excessive use can negatively affect our emotions and mental health.",
      link: "/Blogs/Blog6",
      postedDate: "Sep 17, 2025",
    }, 
    { 
      id: 5,
      title: "Smart Money Habits for Young Professionals",
      image:
        "https://thumbs.dreamstime.com/b/hand-holding-coins-to-stack-growth-plant-step-concept-saving-money-finance-accounting-135832008.jpg",
      description:
        "Learn how to manage your money wisely with simple yet powerful financial habits. From saving first to smart investing, discover the key money habits every young professional should adopt to build long-term wealth and financial freedom.",
      link: "/Blogs/Blog5",
      postedDate: "Sep 15, 2025",
    }, 
     {
     id: 4,
      title: "Generative AI : How AI is Reshaping Our Daily Lives",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovrc4wL1lzSZzK1c0vKxxIfqRwOZ_2zTDcg&s",
      description:
        "Generative Artificial Intelligence (AI)—tools like ChatGPT, Midjourney, and others that create human-like text, images, code, and more—has burst from the lab into the mainstream, becoming one of the most transformative technologies of our time.",
      link: "/Blogs/Blog4",
      postedDate: "Sep 12, 2025",
    }, 
     {
      id: 3,
      title: "Thriving Solo: The Power of Living Alone",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*45811YXR0NM3HUYx",
      description:
        "Living alone is your chance to grow stronger, bolder, and more independent. It challenges you to step out of your comfort zone, trust yourself, and embrace every opportunity life offers.",
      link: "/Blogs/Blog3",
      postedDate: "Sep 10, 2025",
    },
     {
      id: 2,
      title: "Stop Wasting Money: A Beginner's Guide to Choosing the Right Loan",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202501/business-loan-273540286-1x1.jpg?VersionId=etpS79p3_nAVVNXxHms5h5ioCAD9pJqo",
      description:
        "Choosing the right insurance policy can be confusing. Here's how to compare plans and select the one that suits your needs.Stop Wasting Money: A Beginner's Guide to Choosing the Right Loan.",
      link: "/Blogs/Blog2",
      postedDate: "Sep 7, 2025",
    },
   
    {
      id: 1,
      title: "Understanding Insurance: A Foundation for Financial Security",
      image:
        "https://media.istockphoto.com/id/1226082621/photo/insurance-concept-stack-of-wooden-blocks-with-words-life-health-legal-expenses-business-house.jpg?s=612x612&w=0&k=20&c=5bKk7pRl9jewZM_nmIquyGOj4Q7BVNiYRcJC9H1smfE=",
      description:
        "Protect what matters most. Insurance offers financial security against life's unexpected events, giving you peace of mind and a safety net for the future.",
      link: "/Blogs/Blog1",
      postedDate: "Sep 5, 2025",
    },
];
    return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 mt-20 flex items-center justify-center gap-3 text-gray-800">
        <FaPenNib className="text-blue-500 text-3xl" />
         Our Daily Blogs
      </h1>
      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-600 mb-3">{blog.description}</p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => router.push(blog.link)}
                  className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Read More
                </button>
                <span className="text-gray-500 text-sm">{blog.postedDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
