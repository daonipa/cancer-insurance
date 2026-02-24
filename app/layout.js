import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "암보험 | 2명 중 1명이 암에 걸립니다. 준비되셨나요?",
  description: "암 치료 평균 비용 3,291만원. 진단금 + 치료비 + 항암치료까지 보장하는 암주요치료비보험 무료 설계.",
  keywords: "암보험, 암주요치료비, 암진단금, 항암치료보험, 암치료비, 암보험추천",
  openGraph: {
    title: "암보험 | 2명 중 1명이 암에 걸립니다. 준비되셨나요?",
    description: "암 치료 평균 비용 3,291만원. 진단금 + 치료비 + 항암치료까지 보장.",
    type: "website",
    locale: "ko_KR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: "암주요치료비보험 무료 설계",
              description: "암 진단금, 치료비, 항암치료까지 보장하는 암주요치료비보험 무료 상담",
              areaServed: "KR",
            }),
          }}
        />
      </head>
      <body className={`${notoSansKR.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
