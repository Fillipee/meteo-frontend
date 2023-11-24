/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            backgroundImage: {
                sunrise: "url('assets/images/sunrise.jpg')",
                sunset: "url('assets/images/sunset.jpg')",
                sun: "url('assets/images/sun.jpg')",
                rain: "url('assets/images/rain.jpg')",
                storm: "url('assets/images/storm.jpg')",
                snow: "url('assets/images/snow.jpg')",
                night: "url('assets/images/night.jpg')",
                nightRain: "url('assets/images/night_rain.jpg')",
                nightSnow: "url('assets/images/night_snow.jpg')",
            },
            colors: {
                primaryBlue: {
                    50: "#E0E5FF",
                    100: "#C2CCFF",
                    200: "#8A9DFF",
                    300: "#4D6AFF",
                    400: "#0F37FF",
                    500: "#0024D3",
                    600: "#001CA8",
                    700: "#001580",
                    800: "#000E57",
                    900: "#000729",
                    950: "#000314",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                "rotate-little": {
                    "0%": { transform: "rotate(0.0deg)" },
                    "50%": { transform: "rotate(20.0deg)" },
                    "100%": { transform: "rotate(0.0deg)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "rotate-little": "rotate-little 0.3s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
