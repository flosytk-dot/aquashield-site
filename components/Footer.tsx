import { SITE_CONFIG } from "@/data/config";

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/[0.06] px-6 py-16 md:px-16">
      <div className="container-main">
        <div className="flex flex-col md:flex-row justify-between gap-12">

          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-white uppercase mb-1">
              {SITE_CONFIG.brandName}
            </p>
            <p className="text-[10px] tracking-[0.2em] text-white/25 uppercase mb-6">
              Waterproof PVC Board
            </p>
            <p className="text-xs text-white/40 leading-relaxed max-w-xs">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] text-white/25 uppercase mb-5">Contact</p>
            <div className="space-y-2.5 text-xs text-white/50">
              <p>Tel: {SITE_CONFIG.contact.phoneDisplay}</p>
              <p>Email: {SITE_CONFIG.contact.email}</p>
              <p>{SITE_CONFIG.contact.businessHours}</p>
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] text-white/25 uppercase mb-5">Quick Links</p>
            <div className="space-y-2.5">
              {[
                { label: "제품 특징", href: "#solutions" },
                { label: "컬러 라인업", href: "#colors" },
                { label: "제품 규격", href: "#specs" },
                { label: "문의하기", href: "#contact" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block text-xs text-white/40 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[10px] text-white/25">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.companyName}. All rights reserved.
          </p>
          <p className="text-[10px] text-white/15 tracking-widest uppercase">
            Made in Korea
          </p>
        </div>
      </div>
    </footer>
  );
}
