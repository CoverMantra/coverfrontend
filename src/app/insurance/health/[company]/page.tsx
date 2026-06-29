import type { Metadata } from "next";
import { generateSEO } from "../../../../lib/seo";
import BreadcrumbSchema from "../../../Components/BreadcrumbSchema";

interface Props {
  params: Promise<{ company: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { company } = await params;
  const decodedCompany = decodeURIComponent(company).replace(/-/g, " ");

  const title = `${decodedCompany} Health Insurance - Plans, Cashless Hospitals & Buy | CoverMantra`;
  const description = `Protect your family with ${decodedCompany} Health Insurance. Compare individual, family floater, and senior citizen plans. Buy online with cashless hospital benefits.`;

  return generateSEO({
    title,
    description,
    canonical: `https://www.covermantra.com/insurance/health/${company}`,
    keywords: [decodedCompany, `${decodedCompany} health insurance`, "family floater", "cashless treatment"],
  });
}

export default async function Page({ params }: Props) {
  const { company } = await params;
  const decodedCompany = decodeURIComponent(company).replace(/-/g, " ");

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Insurance", url: "/insurance" },
    { name: "Health Insurance", url: "/insurance/health" },
    { name: decodedCompany, url: `/insurance/health/${company}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <main className="min-h-screen bg-[#FFF4E5] pt-12 pb-20 px-6 font-sans">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h1 className="text-3xl md:text-5xl font-black text-[#08101E] mb-6">
            {decodedCompany} Health Insurance
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Secure your healthcare expenses with {decodedCompany} Health Insurance. CoverMantra lets you compare cashless hospital network limits, maternity limits, critical illness covers, and pre-existing disease waiting periods offered by {decodedCompany}.
          </p>
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8 text-sm">
            <h2 className="text-lg font-bold text-[#08101E] mb-4">Key Coverage Areas</h2>
            <ul className="space-y-2 text-gray-500">
              <li>• <strong>Cashless Hospitals:</strong> Multi-city cashless network availability.</li>
              <li>• <strong>Pre & Post Hospitalization:</strong> Extended pre-hospitalization and post-hospitalization cover.</li>
              <li>• <strong>No Room Rent Capping:</strong> Premium plan options without room rent sub-limits.</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
