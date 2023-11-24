/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],

    theme: {
        extend: {
            colors: {
                primary: {
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
            },
        },
    },
    plugins: [],
};
