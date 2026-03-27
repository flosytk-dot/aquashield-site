import Image from "next/image";
import FadeUp from "./FadeUp";

export default function ProductShowcase() {
  return (
    <section className="relative overflow-hidden">
      {/* 전체 화면 이미지 배경 */}
      <div className="relative w-full h-[70vh] md:h-[85vh]">
        <Image
          src="/images/product-showcase2.jpg"
          alt="AQUA SHIELD 방수 PVC 보드 4가지 컬러 + 백골"
          fill
          className="object-contain bg-[#E8E6E2]"
          priority
        />

        {/* 하단 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8E6E2] via-transparent to-transparent" />

        {/* 텍스트 오버레이 - 하단 */}
        <FadeUp className="absolute bottom-0 left-0 right-0 z-10">
          <div className="text-center pb-16 md:pb-20 px-6">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#999999] mb-4">
              AQUA SHIELD
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#111111] leading-snug mb-4 font-serif">
              물에 강한, 오래가는 보드
            </h2>
            <p className="text-sm md:text-base text-[#666666] leading-[1.8]">
              4가지 컬러 + 백골 · 15T / 18T · 1220 × 2440 mm
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
