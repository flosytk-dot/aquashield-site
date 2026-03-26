import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lux: {
          black:    "#0A0A0A",
          dark:     "#121212",
          darker:   "#0E0E0E",
          card:     "#181818",
          border:   "rgba(255,255,255,0.08)",
          white:    "#F0EDE6",       /* 따뜻한 오프화이트 */
          pure:     "#FFFFFF",
          silver:   "#C8C8C8",
          muted:    "#999999",       /* 기존 #888보다 밝게 */
          faint:    "#555555",
          line:     "rgba(255,255,255,0.06)",
          aqua:     "#4DA8DA",       /* 아쿠아 포인트 컬러 */
          "aqua-light": "#7EC8E3",
          "aqua-dark":  "#2C7DA0",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "Apple SD Gothic Neo", "sans-serif"],
        serif: ["Noto Serif KR", "Georgia", "serif"],
      },
      letterSpacing: {
        "ultra": "0.25em",
        "wide-xl": "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;
