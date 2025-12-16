"use client";

import React from "react";
import { FaCloud, FaLock, FaRocket, FaUniversity, FaGlobe } from "react-icons/fa";

export default function CloudComputingBlog() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-800">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-16 px-4 mt-15">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    The Power of Cloud Computing in Today’s World
                </h1>
                <p className="max-w-3xl mx-auto text-lg opacity-90">
                    Discover how cloud computing is transforming businesses, education,
                    and our daily lives through innovation, flexibility, and scalability.
                </p>
            </header>

            {/* Hero Image */}
            {/* Hero Image */}
            <div className="max-w-5xl mx-auto mt-4 px-4">
                <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
                    alt="Cloud computing concept"
                    className="rounded-xl shadow-md w-full max-h-104 object-cover"
                />
            </div>


            {/* Blog Content */}
            <article className="max-w-4xl mx-auto mt-5 rounded-xl shadow-lg p-8">
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-3 flex items-center gap-2">
                        <FaCloud /> What Is Cloud Computing?
                    </h2>
                    <p className="leading-relaxed">
                        Cloud computing is the delivery of computing services—like servers,
                        storage, databases, software, and analytics—over the Internet. It
                        allows users to access technology resources on-demand, without the
                        need for owning physical servers. Companies such as <strong>AWS</strong>,
                        <strong> Microsoft Azure</strong>, and <strong>Google Cloud</strong> power much of today’s digital world.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-3 flex items-center gap-2">
                        <FaRocket /> Why Cloud Computing Matters in 2025
                    </h2>
                    <p>
                        Cloud computing is the backbone of modern innovation. From startups
                        to multinational corporations, it provides flexibility, efficiency,
                        and global reach. In 2025, nearly every sector—healthcare, education,
                        business—is powered by the cloud.
                    </p>
                    <ul className="list-disc ml-6 mt-3 space-y-1">
                        <li><strong>Scalability:</strong> Instantly increase or decrease computing power as needed.</li>
                        <li><strong>Cost Efficiency:</strong> Pay only for what you use, avoiding high hardware costs.</li>
                        <li><strong>Remote Access:</strong> Work from anywhere with internet connectivity.</li>
                        <li><strong>Security:</strong> Cloud providers offer advanced encryption and data protection.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-3 flex items-center gap-2">
                        <FaUniversity /> Cloud Computing in Education
                    </h2>
                    <p>
                        The education sector has transformed thanks to cloud-based platforms
                        such as <strong>Google Classroom</strong> and <strong>Microsoft Teams</strong>. Teachers and students can
                        collaborate in real-time, access resources, and participate in virtual
                        learning—anytime, anywhere.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-3 flex items-center gap-2">
                        <FaLock /> Security and Privacy in the Cloud
                    </h2>
                    <p>
                        As data moves online, security becomes a top priority. Cloud service
                        providers use strong encryption, two-factor authentication, and
                        AI-based threat detection systems to keep data safe. However, users
                        must also take responsibility by managing access permissions and using
                        strong passwords.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-3 flex items-center gap-2">
                        <FaGlobe /> The Future of Cloud Computing
                    </h2>
                    <p>
                        The future of cloud computing promises even greater innovation:
                    </p>
                    <ul className="list-disc ml-6 mt-3 space-y-1">
                        <li><strong>AI Integration:</strong> Smarter, automated systems in the cloud.</li>
                        <li><strong>Edge Computing:</strong> Processing data closer to users for faster results.</li>
                        <li><strong>Green Cloud:</strong> Eco-friendly, energy-efficient data centers.</li>
                        <li><strong>Hybrid Cloud:</strong> Combining public and private cloud environments.</li>
                    </ul>
                    <p className="mt-3">
                        These advancements will continue to shape how people and businesses
                        connect, store, and analyze data across the world.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-blue-600 mb-3">Conclusion</h2>
                    <p>
                        Cloud computing has revolutionized how we work, learn, and innovate.
                        It makes technology more accessible, scalable, and efficient than
                        ever before. The cloud isn’t just a trend—it’s the foundation of
                        today’s digital transformation and the key to our connected future.
                    </p>
                </section>
            </article>
        </main>
    );
}
