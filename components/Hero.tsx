import Image from "next/image";
import { SITE_CONFIG } from "@/data/config";

export default function Hero() {
  const { hero, contact } = SITE_CONFIG;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">

      {/* 배경 이미지 */}
      <Image
        src="/images/hero-bg2.png"
        alt="AQUA SHIELD 방수 PVC 보드"
        fill
        className="object-cover"
        priority
      />

      {/* 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/20" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

      <div className="relative container-main section-padding pt-36 md:pt-44 pb-24 z-10">
        <div className="max-w-2xl">

          {/* 배지 */}
          <div className="inline-flex items-center gap-3 mb-10">
            <div className="w-10 h-px bg-white/40" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-white/60 font-medium">
              Waterproof PVC Board
            </span>
          </div>

          {/* 헤드라인 — 세리프 */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 whitespace-pre-line font-serif">
            {hero.headline}
          </h1>

          {/* 서브헤드라인 */}
          <p className="text-base md:text-lg text-white/70 leading-[1.9] mb-14 whitespace-pre-line max-w-lg">
            {hero.subheadline}
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={contact.kakaoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-kakao justify-center text-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.7 1.512 5.09 3.818 6.6L4.5 21l4.09-2.182A11.5 11.5 0 0012 19c5.523 0 10-3.477 10-7.8S17.523 3 12 3z"/>
              </svg>
              {hero.ctaText}
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="btn-outline justify-center text-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              {hero.ctaSecondaryText}
            </a>
          </div>

          {/* 수치 강조 */}
          <div className="mt-20 pt-10 border-t border-white/[0.08] flex flex-wrap gap-14">
            {[
              { number: "100%", label: "완전 방수" },
              { number: "4가지", label: "컬러 옵션" },
              { number: "15T/18T", label: "두께 선택" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-bold text-white">{item.number}</p>
                <p className="text-[11px] text-white/50 mt-1.5 tracking-[0.15em] uppercase">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 스크롤 힌트 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[14px] text-white tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
