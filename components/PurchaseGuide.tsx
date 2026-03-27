import FadeUp from "./FadeUp";

const steps = [
  {
    step: "01",
    title: "제품 및 규격 선택",
    desc: "필요한 두께, 컬러, 수량을 먼저 파악해 주세요. 잘 모르시면 상담 후 결정해도 됩니다.",
  },
  {
    step: "02",
    title: "샘플 요청 (선택)",
    desc: "실제 색상과 질감을 확인하고 싶으시면 샘플을 먼저 요청하세요. 구매 결정에 도움이 됩니다.",
  },
  {
    step: "03",
    title: "견적 & 주문 확정",
    desc: "수량과 규격을 확정하면 견적을 안내해 드립니다. 배송 지역도 이때 함께 확인합니다.",
  },
  {
    step: "04",
    title: "배송 & 수령",
    desc: "본 제품은 사이즈 특성상 일반 택배 발송이 불가합니다. 용달 또는 퀵배송으로만 진행되며, 배송 일정은 지역에 따라 상이합니다.",
  },
];

const notices = [
  "샘플은 소량 무료 제공 가능합니다 (재고 상황에 따라 다를 수 있음).",
  "커팅·재단 서비스는 제공하지 않습니다. 현장에서 직접 가공하셔야 합니다.",
  "일반 택배 발송이 불가한 제품입니다. 용달 또는 퀵배송으로만 배송됩니다.",
  "서울·경기 지역 배송비: 8만원 / 그 외 지역은 별도 문의 후 진행합니다.",
  "백골로 주문시 원하는 필름지를 직접 시공할 수 있습니다. 단, 필름지 제공 및 시공은 당사에서 진행하지 않습니다.",
  "색상은 모니터 환경에 따라 실제와 다를 수 있으니 샘플 확인을 권장합니다.",
  "재단 및 가공, 보호필름 제거, 스크래치나 파손이 확인된 경우 반품 및 환불은 불가합니다.",
  "백골 제품은 필름 시공 전 상태로 출고되며, 제조 공정상 표면에 미세한 기포 자국이나 스크래치가 있을 수 있습니다. 백골 상태 그대로 마감재로 사용할 경우 표면이 다소 고르지 않을 수 있으니 참고 부탁드립니다.",
];

export default function PurchaseGuide() {
  return (
    <section id="guide" className="section-padding bg-[#0E0E0E]">
      <div className="container-main">

        <FadeUp className="text-center mb-20">
          <p className="section-label mb-4">HOW TO BUY</p>
          <h2 className="section-title mb-5">구매 전 알아두세요</h2>
          <p className="text-base text-white/60 leading-relaxed">
            처음 구매하시는 분도 걱정 없이 진행하실 수 있도록 안내해 드립니다.
          </p>
        </FadeUp>

        {/* 구매 단계 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {steps.map((s, i) => (
            <FadeUp key={s.step} delay={i * 100}>
              <div className="bg-[#181818] border border-white/[0.06] p-8 hover:border-white/20 transition-all duration-300 h-full">
                <span className="text-[52px] font-bold text-white/[0.15] leading-none block mb-6 select-none font-serif">{s.step}</span>
                <h3 className="text-sm font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-white/60 leading-[1.8]">{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* 안내사항 */}
        <FadeUp>
          <div className="border border-white/10 p-10 bg-[#121212]">
            <p className="text-[22px] font-bold text-white mb-8">구매 전 확인사항</p>
            <ul className="space-y-4">
              {notices.map((notice, i) => (
                <li key={i} className="flex items-start gap-4 text-sm text-white/70 leading-[1.8]">
                  <span className="text-white/30 flex-shrink-0 mt-0.5">—</span>
                  {notice}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
