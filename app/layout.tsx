import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: `${SITE_CONFIG.brandName} | ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  keywords: [
    "방수보드",
    "PVC보드",
    "PVC 보드",
    "방수 보드",
    "방수 PVC 보드",
    "PVC",
    "보드",
    "방수판",
    "방수자재",
    "방수 건축자재",
    "PVC 발포보드",
    "PVC 폼보드",
    "AQUA SHIELD",
    "아쿠아쉴드",
    "욕실 인테리어 자재",
    "주방 인테리어 자재",
    "욕실 방수",
    "주방 방수",
    "반지하 방수",
    "인테리어 자재",
    "인테리어 보드",
    "MDF 대체",
    "합판 대체",
    "방수 MDF",
    "곰팡이 방지 보드",
    "습기 방지 보드",
    "수분 방지 보드",
    "큐비클 자재",
    "아트월 자재",
    "베란다 인테리어",
    "캠핑장 자재",
    "분체도장 보드",
    "가구",
    "가구만들기",
    "가구DIY",
    "셀프인테리어",
    "인테리어",
    "방수가구",
    "욕실장",
    "주방가구",
  ],
  authors: [{ name: SITE_CONFIG.companyName }],
  creator: SITE_CONFIG.companyName,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_CONFIG.siteUrl,
    title: `${SITE_CONFIG.brandName} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.brandName,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.brandName,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google594075af64d23ede",
    other: {
      "naver-site-verification": ["ecf69d29a0472247cd0454179a803983726cb666"],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
