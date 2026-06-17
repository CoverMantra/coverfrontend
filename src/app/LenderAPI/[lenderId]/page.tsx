"use client";
import { useParams, usePathname } from "next/navigation";
import LenderFormContainer from "../../Components/LenderFormContainer";

export default function DynamicLenderPage() {
  const params = useParams();
  const pathname = usePathname();

  let lenderId = params?.lenderId as string;
  if (!lenderId && pathname) {
    const parts = pathname.split("/");
    lenderId = parts[parts.length - 1] || parts[parts.length - 2];
  }

  // Normalize lenderId casing (e.g., moneyView -> moneyview, fatakPay -> fatakpay)
  const normalizedLenderId = lenderId ? lenderId.toLowerCase() : "";

  return <LenderFormContainer lenderId={normalizedLenderId} />;
}
