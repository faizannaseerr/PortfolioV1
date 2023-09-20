/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        draw: {
          "0%": {
            strokeDashoffset: "4500",
          },
          "100%": {
            strokeDashoffset: "0",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        draw: "draw 20s ease",
        "spin-slow": "spin 0.3s linear",
        marquee: "marquee 20s linear infinite",
        marquee2: "marquee2 20s linear infinite",
      },
      fontFamily: {
        bitter: ["Bitter", "sans-serif"],
        hind: ["Hind Siliguri", "sans-serif"],
        eb: ["EB Garamond", "serif"],
        rob: ["Roboto", "sans-serif"],
        red: ["Red Hat Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
