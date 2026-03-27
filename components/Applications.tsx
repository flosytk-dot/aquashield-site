import Image from "next/image";
import FadeUp from "./FadeUp";

const spaces = [
  { title: "욕실 & 화장실", tags: ["세면대 하부", "욕실 수납장"], desc: "물이 튀는 환경에서도 완벽히 안전합니다.", image: "/images/욕실화장실.jpg" },
  { title: "주방",          tags: ["싱크대 하부장", "주방 수납"],  desc: "수증기와 물 튀김에도 변형이 없습니다.",     image: "/images/주방.jpg" },
  { title: "반지하 & 지하", tags: ["지하 창고", "반지하 인테리어"], desc: "결로와 습기가 심한 지하 공간에 최적입니다.", image: "/images/지하.jpg" },
  { title: "상업 공간",     tags: ["카페", "레스토랑", "미용실"],  desc: "위생적이고 견고한 상업공간 마감재.",         image: "/images/상업공간.jpg" },
  { title: "야외 & 베란다", tags: ["베란다", "테라스"],            desc: "UV 코팅으로 야외 사용도 가능합니다.",        image: "/images/베란다.jpg" },
  { title: "어린이방",      tags: ["교실", "유치원"],              desc: "친환경 소재로 어린이 공간에도 안전합니다.",  image: "/images/유치원.jpg" },
  { title: "아트월",        tags: ["벽면 마감", "인테리어"],       desc: "세련된 벽면 마감으로 공간의 품격을 높입니다.", image: "/images/아트월.jpg" },
  { title: "큐비클",        tags: ["화장실 칸막이", "파티션"],     desc: "습기에 강해 화장실 칸막이에 최적입니다.",     image: "/images/큐비클.jpg" },
  { title: "광고판",        tags: ["사인보드", "간판"],            desc: "내구성이 뛰어나 옥외 광고판에도 활용됩니다.", image: "/images/광고판.jpg" },
  { title: "분체도장",      tags: ["도장 마감", "산업용"],         desc: "분체도장 베이스로 활용이 가능합니다.",         image: "/images/분체도장.jpg" },
];

export default function Applications() {
  return (
    <section id="applications" className="section-padding bg-[#0E0E0E]">
      <div className="container-main">

        <FadeUp className="text-center mb-20">
          <p className="section-label mb-4">APPLICATION</p>
          <h2 className="section-title mb-5">어디서든 사용할 수 있습니다</h2>
          <p className="text-base text-white/60 max-w-sm mx-auto leading-relaxed">
            물 걱정이 있는 모든 공간에 AQUA SHIELD가 답입니다.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {spaces.map((space, i) => (
            <FadeUp key={space.title} delay={i * 80}>
              <div className="bg-[#181818] border border-white/[0.06] group hover:border-white/20 transition-all duration-300 overflow-hidden h-full">
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                </div>
                <div className="p-8 pt-4">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {space.tags.map((tag) => (
                      <span key={tag} className="text-[10px] tracking-widest border border-white/20 text-white/50 px-2.5 py-1 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-white text-base mb-2">{space.title}</h3>
                  <p className="text-sm text-white/60 leading-[1.8]">{space.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
