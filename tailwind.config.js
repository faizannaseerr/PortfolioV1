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
        move: {
          "0%": { transform: "translate(0px, 0px)" },
          "10%": { transform: "translate(-20px, -20px)" },
          "20%": { transform: "translate(20px, -40px)" },
          "30%": { transform: "translate(-20px, 20px)" },
          "40%": { transform: "translate(40px, 0px)" },
          "50%": { transform: "translate(-40px, -20px)" },
          "60%": { transform: "translate(20px, 40px)" },
          "70%": { transform: "translate(-20px, -20px)" },
          "80%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        extend: {
          "0%, 100%": { transform: "scale(0.25) translateY(25%)" },
          "25%, 75%": { transform: "scale(0.75) translateX(25%)" },
          "50%": { transform: "scale(1.25) translateX(0%)" },
        },
      },
      animation: {
        draw: "draw 20s ease",
        "spin-slow": "spin 0.4s linear",
        marquee: "marquee 20s linear infinite",
        marquee2: "marquee2 20s linear infinite",
        "move-slow": "move 5s infinite ease-in-out",
        "extend-slow-1": "extend 6s infinite linear",
        "extend-slow-2": "extend 7s infinite linear",
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
