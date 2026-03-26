import FadeUp from "./FadeUp";

const advantages = [
  {
    number: "01",
    title: "완전 방수",
    subtitle: "100% Waterproof",
    desc: "PVC 재질 특성상 물을 전혀 흡수하지 않습니다. 물속에 담가도 팽창, 변형, 박리가 없습니다. 주방·욕실·반지하·상업공간 모두 사용 가능합니다.",
  },
  {
    number: "02",
    title: "곰팡이·세균 차단",
    subtitle: "Anti-Mold & Bacteria",
    desc: "유기물이 없는 PVC는 곰팡이가 자랄 환경 자체가 없습니다. 습하고 밀폐된 공간에서도 위생적인 상태를 오래 유지합니다.",
  },
  {
    number: "03",
    title: "가볍고 시공 편리",
    subtitle: "Lightweight & Easy Install",
    desc: "같은 크기의 합판 대비 약 40% 가벼워 1인 시공이 가능합니다. 일반 목공 도구로 재단하고 접착제로 부착하면 됩니다.",
  },
  {
    number: "04",
    title: "오래가는 내구성",
    subtitle: "Long-lasting Durability",
    desc: "자외선, 열, 습기에 강해 변색·갈라짐이 없습니다. 목질 보드와 비교해 2~3배 이상 긴 수명을 자랑합니다.",
  },
  {
    number: "05",
    title: "난연성",
    subtitle: "Fire Retardant",
    desc: "PVC 소재 특성상 자기 소화성을 가지고 있어 불꽃이 닿아도 스스로 꺼집니다. 화재 확산을 억제하여 안전한 공간을 만듭니다.",
  },
  {
    number: "06",
    title: "뛰어난 가공성",
    subtitle: "Easy to Process",
    desc: "일반 목공 도구(톱, 드릴, 라우터 등)로 쉽게 재단·가공할 수 있습니다. 원하는 필름지를 부착하여 다양한 디자인 연출이 가능합니다.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-[#121212]">
      <div className="container-main">

        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <p className="section-label mb-4">THE SOLUTION</p>
            <h2 className="section-title">
              AQUA SHIELD가<br />선택받는 6가지 이유
            </h2>
          </div>
          <p className="text-sm text-white/60 max-w-xs md:text-right leading-relaxed">
            단순히 &lsquo;방수된다&rsquo;는 것 이상입니다.<br />
            시공부터 유지까지 차이를 만듭니다.
          </p>
        </FadeUp>

        {/* 장점 카드 — 흰색 배경 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {advantages.map((item, i) => (
            <FadeUp key={item.number} delay={i * 100}>
              <div className="bg-white p-10 hover:shadow-xl transition-shadow duration-300 h-full">
                <span className="text-[64px] font-bold text-[#CCCCCC]/50 leading-none block mb-6 select-none font-serif">
                  {item.number}
                </span>
                <h3 className="text-lg font-bold text-[#111111] mb-1">{item.title}</h3>
                <p className="text-[10px] tracking-[0.2em] text-lux-aqua uppercase mb-4">{item.subtitle}</p>
                <p className="text-sm text-[#444444] leading-[1.8]">{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* 비교표 */}
        <FadeUp delay={200}>
          <div className="mt-24 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="px-6 py-6 text-left text-[22px] tracking-[0.1em] text-white font-semibold">비교 항목</th>
                  <th className="px-6 py-6 text-center text-[22px] tracking-[0.1em] text-white/60 font-semibold">PB / MDF</th>
                  <th className="px-6 py-6 text-center text-[22px] tracking-[0.1em] text-white font-semibold">AQUA SHIELD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {[
                  ["방수 성능",     "없음",                   "완전 방수"],
                  ["곰팡이 저항",   "취약",                   "안전"],
                  ["무게",         "무거움",                  "가벼움 (약 40% 감소)"],
                  ["시공 난이도",   "2인 이상 필요",           "1인 시공 가능"],
                  ["수명",         "3~5년 (습한 공간)",        "10년 이상"],
                  ["유지보수",      "주기적 교체 필요",         "거의 불필요"],
                ].map(([label, mdf, aqua]) => (
                  <tr key={label} className="hover:bg-white/[0.03] transition-colors">
                    <td className="px-6 py-4 text-white text-sm">{label}</td>
                    <td className="px-6 py-4 text-center text-white/60 text-sm">{mdf}</td>
                    <td className="px-6 py-4 text-center text-white font-semibold text-sm">{aqua}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
