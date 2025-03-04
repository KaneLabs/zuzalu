/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./templates/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                eventbg1: "rgba(212, 249, 232, 0.9)",
                eventbg2: "rgba(247, 222, 55, 0.9)"
            },
            fontWeight: {
                semibold: "600"
            },
            fontFamily: {
                sans: ["'Avenir Next'", ...defaultTheme.fontFamily.sans],
                serif: ["Reckless", ...defaultTheme.fontFamily.serif],
                year: ["Poppins"],
                cinzel: ["Cinzel", "sans-serif"]
            },
            fontSize: {
                "brand-sm": ".9rem",
                "brand-4xl": ["2.75rem", "2.6rem"],
                "brand-2xs": [".75rem", ".75rem"],
                "brand-3xs": ".625rem",
                "brand-h1": ["2.75rem", 1.1],
                "brand-h2": ["2.25rem", 1.1],
                "brand-h3": ["2rem", 1.1],
                "brand-button": "14px",
                "brand-body": "14px",
                "brand-info": "12px"
            },
            colors: {
                brand: {
                    beige: "#EAE1DA",
                    beige2: "#F0EBE8",
                    beige3: "#B8AEA7",
                    blue: "#435C6C",
                    blue2: "#5F99EF",
                    gray: "#475F6F",
                    gray2: "#000000",
                    gray50: "#1E1E1E80",
                    gray60: "#333333",
                    red: "#BD5141",
                    black: "#1E1E1E",
                    yellow: "#00FFEA",
                    yellow2: "#EFD85F",
                    orange: "#BD5141",
                    orange2: "#EE8C45",
                    brown: "#402917",
                    brown2: "#513E2E",
                    green: "#35655F",
                    purple: "#8679AB"
                },
                zulalu: {
                    primary: "#35655F",
                    secondary: "#52B5A4",
                    lightBase: "#fbfaf8",
                    darkBase: "#2C2A26",
                    gradient1: "#D2F8E8CC",
                    gradient2: "#FFF250CC",
                    yellow: "#FCD270"
                },
                fora: {
                    primary: "#00FFEA",
                    secondary: "#FF8000",
                    magenta: "#FF0062",
                    lightBase: "#fbfaf8",
                    darkBase: "#2C2A26",
                    gray50: "#fbfaf8",
                    gray100: "#F8F6F2",
                    gray200: "#F2EDE5",
                    gray300: "#ECE5D8",
                    gray400: "#9C9485",
                    gray600: "#706A5F",
                    gray700: "#59544C",
                    gray800: "#433F39",
                    gray900: "#2C2A26",
                    gray950: "#1A1916",
                }
            },
            filter: {
                filter: {
                    none: "none",
                    "blur-150": "blur(150px)"
                }
            },
            borderColor: {
                primary: "#35655F",
                secondary: "#52B5A4",
                lightBase: "#F8FFFE",
                darkBase: "#1C2928",
                gradient1: "#D2F8E8CC",
                gradient2: "#FFF250CC",
                yellow: "#FCD270"
            },
            boxShadow: {
                question: "4px 4px 25px rgba(0, 0, 0, 0.25)"
            },
            scale: {
                flip: "-1"
            },
            backgroundImage: {
                bgGradientAboutPage: "linear-gradient(106.19deg, #F7DE37 3.32%, #D2F8E8 75.54%)",
                "gradient-radial": "radial-gradient(50.56% 39.32% at 49.87% 33.22%, #468C80 8.85%, #325F57 100%)",
                "gradient-linear":
                    "linear-gradient(106.41deg, rgba(210, 248, 232, 0.8) 58.63%, rgba(255, 242, 80, 0.8) 99.09%)",
                mountains: "url('/mountains.png')",
                zulaluVector: "url('/zulalu-vector.png')"
            }
        }
    },
    plugins: [require("@tailwindcss/line-clamp")]
}
