"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/data/config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "제품 특징", href: "#solutions" },
    { label: "적용 공간", href: "#applications" },
    { label: "컬러 라인업", href: "#colors" },
    { label: "제품 규격", href: "#specs" },
    { label: "문의하기", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="container-main flex items-center justify-between h-18 md:h-20 px-6 md:px-16">

        {/* 로고 */}
        <a href="#" className="flex flex-col leading-none">
          <span className="text-base md:text-lg font-bold tracking-[0.2em] text-white uppercase">
            {SITE_CONFIG.brandName}
          </span>
          <span className="text-[9px] tracking-[0.25em] text-white/40 uppercase mt-0.5">
            Waterproof PVC Board
          </span>
        </a>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.12em] font-medium text-white/70 hover:text-white transition-colors duration-300 uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* 상담 버튼 */}
        <a
          href={SITE_CONFIG.contact.kakaoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 border border-white/30 text-white/80 text-xs font-semibold tracking-[0.12em] uppercase px-5 py-2.5 transition-all duration-300 hover:border-white hover:bg-white/5"
        >
          상담하기
        </a>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-white/[0.06] px-6 py-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-[0.15em] uppercase text-white/70 hover:text-white py-3 border-b border-white/[0.06] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SITE_CONFIG.contact.kakaoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-kakao justify-center mt-4"
          >
            카카오톡 상담
          </a>
        </div>
      )}
    </header>
  );
}
