import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: `${SITE_CONFIG.brandName} | ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  keywords: [
    "방수 PVC 보드",
    "수분 방지 보드",
    "욕실 인테리어 자재",
    "주방 인테리어",
    "PVC 보드",
    "AQUA SHIELD",
    "방수 보드",
    "인테리어 자재",
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
