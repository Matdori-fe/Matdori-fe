/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
        // 100~10 => 맛도리 메인 색깔
        100: "#e73b3b",
        80: "#ec6262",
        30: "#f8c5c5",
        10: "#fdecec",
        black: "#000000",
        white: "#FFFFFF",
        gray: "#b3b3b3",
        lightgray: "#e6e6e6",
        darkgray: "#595959"
      },
      fontFamily: {
        // 폰트 설정 => (font-이름) 으로 적용
        Light: ['Pretendard-Light'],
        Regular: ["Pretendard"],
        Bold: ['Pretendard-Bold'],
      },
    },
    
  },
  plugins: [],
}