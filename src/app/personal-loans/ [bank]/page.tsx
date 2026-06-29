import type { Metadata } from "next";
import { generateSEO } from "../../../lib/seo";
import BreadcrumbSchema from "../../Components/BreadcrumbSchema";

interface Props {
  params: Promise<{ bank: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bank } = await params;
  const decodedBank = decodeURIComponent(bank).replace(/-/g, " ");
  
  const title = `Best Personal Loan Offers from ${decodedBank} | CoverMantra`;
  const description = `Compare personal loan interest rates, processing fees, tenure, and eligibility criteria for ${decodedBank}. Apply online via CoverMantra for fast approval.`;

  return generateSEO({
    title,
    description,
    canonical: `https://www.covermantra.com/personal-loans/${bank}`,
    keywords: [decodedBank, `${decodedBank} personal loan`, "CoverMantra personal loans"],
  });
}

export default async function Page({ params }: Props) {
  const { bank } = await params;
  const decodedBank = decodeURIComponent(bank).replace(/-/g, " ");

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Personal Loans", url: "/personal-loans" },
    { name: decodedBank, url: `/personal-loans/${bank}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <main className="min-h-screen bg-[#FFF4E5] pt-12 pb-20 px-6 font-sans">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h1 className="text-3xl md:text-5xl font-black text-[#08101E] mb-6">
            {decodedBank} Personal Loans
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Welcome to CoverMantra's custom portal for {decodedBank} Personal Loans. Compare the latest interest rates, calculate EMIs, evaluate processing fees, and apply online for hassle-free disbursal.
          </p>
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8 text-sm">
            <h2 className="text-lg font-bold text-[#08101E] mb-4">Quick Highlights</h2>
            <ul className="space-y-2 text-gray-500">
              <li>• <strong>Interest Rate:</strong> Competitive rates tailored to your credit profile.</li>
              <li>• <strong>Processing Fees:</strong> Low documentation fees.</li>
              <li>• <strong>Tenure:</strong> Flexible repayment terms.</li>
              <li>• <strong>Collateral:</strong> 100% Unsecured Personal Loan options.</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
