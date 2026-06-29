import type { Metadata } from "next";
import { generateSEO } from "../../../lib/seo";
import BreadcrumbSchema from "../../Components/BreadcrumbSchema";

interface Props {
  params: Promise<{ bank: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bank } = await params;
  const decodedBank = decodeURIComponent(bank).replace(/-/g, " ");

  const title = `Business Loans from ${decodedBank} - Interest Rates & Apply | CoverMantra`;
  const description = `Fuel your enterprise with ${decodedBank} Business Loans. Check interest rates, collateral-free limits, loan terms, and apply online through CoverMantra.`;

  return generateSEO({
    title,
    description,
    canonical: `https://www.covermantra.com/business-loans/${bank}`,
    keywords: [decodedBank, `${decodedBank} business loan`, "MSME loans", "CoverMantra business financing"],
  });
}

export default async function Page({ params }: Props) {
  const { bank } = await params;
  const decodedBank = decodeURIComponent(bank).replace(/-/g, " ");

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Business Loans", url: "/business-loans" },
    { name: decodedBank, url: `/business-loans/${bank}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <main className="min-h-screen bg-[#FFF4E5] pt-12 pb-20 px-6 font-sans">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h1 className="text-3xl md:text-5xl font-black text-[#08101E] mb-6">
            {decodedBank} Business Loans
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Grow your business with {decodedBank} Business Loans. CoverMantra connects you with the best business financing offers, from working capital loans and MSME term loans to commercial equipment financing.
          </p>
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8 text-sm">
            <h2 className="text-lg font-bold text-[#08101E] mb-4">Financing Overview</h2>
            <ul className="space-y-2 text-gray-500">
              <li>• <strong>Loan Options:</strong> Working capital, MSME expansion, equipment financing.</li>
              <li>• <strong>Repayment Terms:</strong> Flexible structures designed around your cash flows.</li>
              <li>• <strong>Fast Processing:</strong> Minimum paperwork with digitized bureau verifications.</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
