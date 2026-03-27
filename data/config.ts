// ============================================================
//  AQUA SHIELD 홈페이지 설정 파일
//  이 파일만 수정하면 홈페이지의 주요 내용이 바뀝니다.
// ============================================================

export const SITE_CONFIG = {
  // 회사 & 브랜드 정보
  brandName: "AQUA SHIELD",
  companyName: "주식회사 무니온",
  tagline: "물에 강한 방수 PVC 보드",
  description:
    "습기·물·곰팡이에도 끄떡없는 AQUA SHIELD 방수 PVC 보드. 주방, 욕실, 상업공간 어디서든 오래도록 아름답게.",

  // SEO
  siteUrl: "https://aquashield.co.kr", // 실제 도메인으로 변경하세요
  ogImage: "/images/og-image.jpg",

  // 문의 연락처 — 아래 값만 바꾸면 됩니다
  contact: {
    phone: "010-5639-4982",            // ← 전화번호 입력
    phoneDisplay: "010-5639-4982",     // ← 화면에 표시될 전화번호
    kakaoLink: "http://pf.kakao.com/_dzVyn", // ← 카카오톡 오픈채팅 링크
    sampleRequestLink: "http://pf.kakao.com/_dzVyn", // ← 샘플 요청 링크 (카카오 or 폼)
    email: "munion@mymunion.com", // ← 이메일 (선택)
    businessHours: "평일 09:00 ~ 18:00 (점심 12:00 ~ 13:00)",
  },

  // 히어로 섹션
  hero: {
    headline: "물이 닿아도\n변하지 않는 완벽한 보드",
    subheadline:
      "AQUA SHIELD는 MDF·합판의 한계를 넘어,\n습기와 물에 완전히 강한 방수 PVC 보드입니다.",
    ctaText: "카카오톡 상담하기",
    ctaSecondaryText: "전화 문의",
  },

  // 제품 규격
  specs: [
    { label: "크기", value: "1220 × 2440 mm" },
    { label: "두께", value: "15T / 18T" },
    { label: "재질", value: "PVC 발포 보드 (Foam Board)" },
    { label: "납기", value: "서울 / 경기 지역 : 8만원 (그 외 지역 별도 문의)" },
  ],

  // 색상 라인업 (이름 + 색상코드 또는 이미지 경로)
  colors: [
    { name: "백골", subtitle: "원하는 필름지를 직접 시공할 수 있는 상태로 출고", image: "", hex: "#FFFFFF" },
    { name: "화이트", image: "/images/흰색.jpg" },
    { name: "아이보리", image: "/images/아이보리.jpg" },
    { name: "라이트 그레이", image: "/images/라이트그레이.jpg" },
    { name: "다크 그레이", image: "/images/다크그레이.jpg" },
  ],
};