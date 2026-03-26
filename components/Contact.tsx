import { SITE_CONFIG } from "@/data/config";
import FadeUp from "./FadeUp";

export default function Contact() {
  const { contact, companyName } = SITE_CONFIG;

  return (
    <section id="contact" className="section-padding bg-[#0A0A0A]">
      <div className="container-main">

        <FadeUp className="text-center mb-20">
          <p className="section-label mb-4">CONTACT</p>
          <h2 className="section-title mb-5">지금 바로 문의하세요</h2>
          <p className="text-base text-white/60 max-w-sm mx-auto leading-relaxed">
            샘플, 견적, 배송 상담 모두 가능합니다.<br />
            편한 방법으로 연락주세요.
          </p>
        </FadeUp>

        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">

            {/* 전화 문의 */}
            <a
              href={`tel:${contact.phone}`}
              className="bg-[#181818] border border-white/[0.06] p-12 flex flex-col items-center gap-5 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 border border-white/15 flex items-center justify-center group-hover:border-white/40 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.8">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-[11px] tracking-[0.2em] text-white/50 uppercase mb-2">전화 문의</p>
                <p className="text-white font-bold text-lg tracking-wide">{contact.phoneDisplay}</p>
                <p className="text-white/40 text-[11px] mt-2 leading-relaxed">{contact.businessHours}</p>
              </div>
            </a>

            {/* 카카오톡 */}
            <a
              href={contact.kakaoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FEE500] p-12 flex flex-col items-center gap-5 hover:bg-[#F0D800] transition-colors duration-300 group"
            >
              <div className="w-14 h-14 bg-[#3A1D1D]/10 flex items-center justify-center">
                <svg width="26" height="24" viewBox="0 0 28 26" fill="#3A1D1D" opacity="0.7">
                  <path d="M14 0C6.268 0 0 5.024 0 11.219c0 3.894 2.335 7.326 5.882 9.446l-1.506 5.602 6.499-3.466A16.58 16.58 0 0014 23.438c7.732 0 14-5.024 14-11.219S21.732 0 14 0z"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-[11px] tracking-[0.2em] text-[#3A1D1D]/50 uppercase mb-2">카카오톡 상담</p>
                <p className="text-[#3A1D1D] font-bold text-base">링크 클릭 후 채팅 시작</p>
                <p className="text-[#3A1D1D]/50 text-[11px] mt-2">빠른 응답 가능</p>
              </div>
            </a>

            {/* 샘플 요청 */}
            <a
              href={contact.sampleRequestLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#181818] border border-white/[0.06] p-12 flex flex-col items-center gap-5 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 border border-white/15 flex items-center justify-center group-hover:border-white/40 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.8">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-[11px] tracking-[0.2em] text-white/50 uppercase mb-2">샘플 요청</p>
                <p className="text-white font-bold text-base">색상·질감 직접 확인</p>
                <p className="text-white/40 text-[11px] mt-2">무료 제공 (재고 한정)</p>
              </div>
            </a>
          </div>
        </FadeUp>

        <div className="text-center border-t border-white/[0.06] pt-10">
          <p className="text-sm text-white/40">
            {companyName} · {contact.businessHours}
          </p>
        </div>
      </div>
    </section>
  );
}
