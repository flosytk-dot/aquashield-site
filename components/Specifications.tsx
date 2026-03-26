import Image from "next/image";
import { SITE_CONFIG } from "@/data/config";
import FadeUp from "./FadeUp";

export default function Specifications() {
  const { specs } = SITE_CONFIG;

  return (
    <section id="specs" className="section-padding bg-[#0A0A0A]">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* 좌측 */}
          <FadeUp>
            <div>
              <p className="section-label mb-4">SPECIFICATIONS</p>
              <h2 className="section-title mb-4">제품 규격 &<br />주문 정보</h2>
              <p className="text-base text-white leading-[1.8] mb-12">
                표준 규격으로 재고 보유 중입니다.<br />
                원하는 필름지를 직접 시공할 수 있는 제품입니다.<br />
                <span className="text-white/70">(필름지 제공 및 시공은 당사에서 진행하지 않습니다.)</span>
              </p>

              <div className="divide-y divide-white/10">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-start py-5 gap-4">
                    <span className="text-sm text-white/50 tracking-wide flex-shrink-0">{spec.label}</span>
                    <span className="text-sm text-white/90 text-right leading-relaxed">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* 우측 */}
          <FadeUp delay={150}>
            <div className="border border-white/10 p-10 bg-[#121212]">
              <p className="text-[22px] tracking-[0.2em] text-white/50 uppercase mb-10 font-semibold">Size Guide</p>

              {/* 보드 사이즈 이미지 */}
              <div className="mb-10">
                <Image
                  src="/images/board-size.jpg"
                  alt="AQUA SHIELD 보드 사이즈 1220 x 2440mm"
                  width={800}
                  height={508}
                  className="w-full h-auto"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {["15T", "18T"].map((t) => (
                  <span key={t} className="text-xs border border-white/20 text-white/70 px-4 py-1.5 tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
