import Image from "next/image";
import { SITE_CONFIG } from "@/data/config";
import FadeUp from "./FadeUp";

export default function ColorLineup() {
  const { colors } = SITE_CONFIG;

  return (
    <section id="colors" className="section-padding bg-[#121212]">
      <div className="container-main">

        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <p className="section-label mb-4">COLOR LINEUP</p>
            <h2 className="section-title">컬러 라인업</h2>
          </div>
          <p className="text-sm text-white/60 max-w-xs md:text-right leading-relaxed">
            샘플 요청 시 실제 색상 칩을<br />받아보실 수 있습니다.
          </p>
        </FadeUp>

        {/* 컬러 그리드 — 5개이므로 5열 */}
        <FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {colors.map((color: { name: string; image?: string; hex?: string }) => (
              <div key={color.name} className="group cursor-pointer">
                <div
                  className="w-full aspect-square mb-4 relative overflow-hidden transition-all duration-300 group-hover:scale-[0.97] border border-white/10 group-hover:border-white/30 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                  style={!color.image && color.hex ? { backgroundColor: color.hex } : undefined}
                >
                  {color.image && (
                    <Image
                      src={color.image}
                      alt={color.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <p className="text-sm font-medium text-white/90 tracking-wide">{color.name}</p>
              </div>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
