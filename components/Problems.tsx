import FadeUp from "./FadeUp";

const problems = [
  {
    num: "01",
    title: "수분 흡수 & 팽창",
    desc: "PB·MDF는 물에 닿으면 수분을 흡수해 부풀고 변형됩니다. 주방 싱크대 하부장, 욕실 선반에서 특히 빨리 망가집니다.",
  },
  {
    num: "02",
    title: "곰팡이 & 세균 번식",
    desc: "내부에 수분이 차면 곰팡이가 핍니다. 표면이 멀쩡해 보여도 내부는 이미 부식이 진행 중입니다.",
  },
  {
    num: "03",
    title: "무겁고 시공이 어려움",
    desc: "일반 목질 보드는 무거워서 시공 시 2인 이상이 필요하고, 시공 시간이 오래 걸립니다.",
  },
  {
    num: "04",
    title: "수명이 짧고 교체 비용 반복",
    desc: "습도가 높은 공간에서 PB·MDF 수명은 3~5년에 불과합니다. 짧은 주기로 교체하면 비용이 계속 발생합니다.",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="section-padding bg-[#0E0E0E]">
      <div className="container-main">

        <FadeUp className="text-center mb-20">
          <p className="section-label mb-4">THE PROBLEM</p>
          <h2 className="section-title mb-5">
            PB·MDF의<br className="hidden md:block" /> 피할 수 없는 문제점
          </h2>
          <p className="text-base text-white/70 max-w-md mx-auto leading-relaxed">
            습기가 많은 공간에 기존의 PB·MDF를 쓰면 결국 이렇게 됩니다.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <FadeUp key={p.title} delay={i * 100} className="h-full">
              <div className="bg-white p-10 group hover:shadow-lg transition-shadow duration-300 h-full">
                <span className="text-[40px] font-serif font-bold text-[#DDDDDD]/20 block mb-4">{p.num}</span>
                <h3 className="text-base font-bold text-[#111111] mb-3 tracking-wide">{p.title}</h3>
                <p className="text-sm text-[#444444] leading-[1.8]">{p.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={400}>
          <div className="mt-20 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/15" />
            <span className="text-xs tracking-[0.2em] text-white/60 uppercase whitespace-nowrap">
              AQUA SHIELD가 이 모든 문제를 해결합니다
            </span>
            <div className="flex-1 h-px bg-white/15" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
