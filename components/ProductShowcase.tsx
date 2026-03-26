import Image from "next/image";
import FadeUp from "./FadeUp";

export default function ProductShowcase() {
  return (
    <section className="relative bg-[#E8E6E2] overflow-hidden">
      {/* 이미지 배경색과 동일한 색으로 전체를 채우고, 이미지를 중앙에 배치 */}
      <div className="relative w-full flex items-center justify-center py-20 md:py-28">
        {/* 제품 이미지 */}
        <div className="w-[50%] max-w-xl relative z-10">
          <Image
            src="/images/product-stack.png"
            alt="AQUA SHIELD 방수 PVC 보드 4가지 컬러 + 백골"
            width={1200}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* 텍스트 — 하단에 오버레이 */}
      <FadeUp>
        <div className="relative z-10 text-center pb-20 md:pb-28 px-6">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#999999] mb-4">
            AQUA SHIELD
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111111] leading-snug mb-4 font-serif">
            물에 강한, 오래가는 보드
          </h2>
          <p className="text-sm text-[#666666] leading-[1.8]">
            4가지 컬러 + 백골 · 15T / 18T · 1220 × 2440 mm
          </p>
        </div>
      </FadeUp>
    </section>
  );
}
