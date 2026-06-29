import type { Metadata } from "next";
import { generateSEO } from "../../../../lib/seo";
import BreadcrumbSchema from "../../../Components/BreadcrumbSchema";

interface Props {
  params: Promise<{ company: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { company } = await params;
  const decodedCompany = decodeURIComponent(company).replace(/-/g, " ");

  const title = `${decodedCompany} Car Insurance - Rates, Cashless Garages & Buy | CoverMantra`;
  const description = `Compare premiums, IDV features, and cashless network benefits of ${decodedCompany} Car Insurance. Secure your car online in minutes with CoverMantra.`;

  return generateSEO({
    title,
    description,
    canonical: `https://www.covermantra.com/insurance/car/${company}`,
    keywords: [decodedCompany, `${decodedCompany} car insurance`, "vehicle cover", "cashless repairs"],
  });
}

export default async function Page({ params }: Props) {
  const { company } = await params;
  const decodedCompany = decodeURIComponent(company).replace(/-/g, " ");

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Insurance", url: "/insurance" },
    { name: "Car Insurance", url: "/insurance/car" },
    { name: decodedCompany, url: `/insurance/car/${company}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <main className="min-h-screen bg-[#FFF4E5] pt-12 pb-20 px-6 font-sans">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h1 className="text-3xl md:text-5xl font-black text-[#08101E] mb-6">
            {decodedCompany} Car Insurance
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Protect your vehicle with {decodedCompany} Car Insurance. CoverMantra helps you compare third-party plans, comprehensive plans, and premium add-ons (like zero-depreciation and engine protection covers) offered by {decodedCompany}.
          </p>
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8 text-sm">
            <h2 className="text-lg font-bold text-[#08101E] mb-4">Plan Benefits</h2>
            <ul className="space-y-2 text-gray-500">
              <li>• <strong>Network Garages:</strong> High cashless garage network access.</li>
              <li>• <strong>No Claim Bonus:</strong> Simple dynamic discount carries forward on renewal.</li>
              <li>• <strong>Digital Claims:</strong> 100% paperless video inspections for fast settlement.</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
