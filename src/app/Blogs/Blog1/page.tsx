import React from 'react';
import { ShieldCheck, TrendingUp, Heart, Briefcase } from 'lucide-react';

const BlogPostPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <article className="w-full max-w-4xl px-4 py-12 md:py-20">
      <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-4xl mt-2 md:text-4xl font-extrabold text-red-700 leading-tight tracking-tighter">
            🛑 What If You Had To Choose: <br className="hidden sm:inline" />Your Savings or Your Family's Future?
          </h1>
          <p className="mt-4 text-xl text-gray-600 font-medium">
            The Quiet Power of Being Prepared
          </p>
        </header>
        <section className="space-y-8 text-lg text-gray-800 leading-relaxed">
        <p className="text-2xl font-semibold text-gray-900 border-l-4 border-red-500 pl-4 italic">
       Every day, you work hard, save diligently, and plan for a brighter tomorrow. You're building a life—a home, a career, a legacy. But nestled within this beautiful construction is a quiet, powerful fear: **the unexpected.**
          </p>
          <p>
            A sudden illness, a major accident, a natural disaster—these events don't just happen to "other people." They are the random moments that force you to make a heartbreaking choice: Do you empty your hard-earned **savings**? Do you sell the assets you cherished? Or, do you sacrifice your family's essential needs just to stay afloat?
          </p>
        <div className="flex items-start space-x-3 pt-4">
            <ShieldCheck className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-gray-900">
              The Financial Safety Net Isn't a Luxury—It's a Strategy.
            </h2>
          </div>
          <p>
            This isn't a conversation about buying a "policy." This is a discussion about buying **time**, **stability**, and **unshakeable peace of mind**.
          </p>
          <p>
            Think of your insurance as the **ultimate financial risk transfer.** You pay a small, predictable fee today so you never have to face a devastating, unpredictable cost tomorrow. It's the strategic move that frees your money to do what it was always intended to do: **grow your wealth**, not just pay for catastrophe.
          </p>
           <div className="bg-red-50 p-6 rounded-xl border border-red-200">
            <h3 className="text-2xl font-bold text-red-700 mb-4">The True Cost of "Going Without"</h3>
            <p className="mb-4">
              When you choose to go without this foundation, the real cost isn't the premium you saved. It's the cost of:
            </p>
            <ul className="space-y-4 list-disc list-inside ml-4">
              <li className="font-semibold text-red-600">
                Lost Momentum: <span className="font-normal text-gray-800">Watching years of saving vanish in weeks, forcing you to start building your nest egg from zero again.</span>
              </li>
              <li className="font-semibold text-red-600">
                Forced Sacrifice: <span className="font-normal text-gray-800">Having to pull a child out of their dream college or sell the family home because you're tied up with medical bills or unexpected damage.</span>
              </li>
              <li className="font-semibold text-red-600">
                The Weight of Worry: <span className="font-normal text-gray-800">The constant, low-level anxiety that distracts you from enjoying the present moment with your loved ones.</span>
              </li>
            </ul>
          </div>
           <div className="flex items-start space-x-3 pt-4">
            <Briefcase className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold text-gray-900">
              Become the Architect of Your Own Unstoppable Future
            </h2>
          </div>
          <p>
            You are not powerless against the unpredictable. You are the architect of your own destiny.
          </p>
          <p className="text-xl font-bold text-gray-900 pt-4">
            Insurance is the bedrock of a confident life. It allows you to:
          </p>
          <ol className="space-y-4 list-decimal list-inside ml-6 text-gray-800">
            <li className="font-semibold">
              <TrendingUp className="inline w-5 h-5 mr-2 text-green-500" />
              Be Audacious: <span className="font-normal">Take that career risk, start that business, or move into that dream home, knowing your foundation is protected.</span>
            </li>
            <li className="font-semibold">
              <Heart className="inline w-5 h-5 mr-2 text-red-500" />
              Be Present: <span className="font-normal">Stop checking your bank account with dread after a major event and focus entirely on recovery and your loved ones.</span>
            </li>
            <li className="font-semibold">
              <ShieldCheck className="inline w-5 h-5 mr-2 text-blue-500" />
              Be Generational: <span className="font-normal">Secure your legacy, ensuring that your dreams for your children and grandchildren are protected, regardless of what happens to you.</span>
            </li>
          </ol>
          <p className="pt-6 text-xl font-semibold text-center text-gray-900">
            Choosing the right protection is an act of **courage**, a declaration that you value your future enough to shield it. It's a testament to your responsibility, your foresight, and your deep commitment to those who matter most.
          </p>
            <div className="text-center pt-8">
            <a
              href="/contact-us" 
              className="inline-block px-10 py-4 text-2xl font-bold text-white bg-red-600 rounded-full shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
            > Don't let a single unforeseen event define your financial story. Fortify your future today.
            </a>
          </div>
        </section>
      </article>
    </div>
  );
};
export default BlogPostPage;