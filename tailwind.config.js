const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    purge: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Open Sans", "Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                sky: colors.sky,
                cyan: colors.cyan,
                indigo: colors.indigo,
                "wild-blue-yonder": {
                    DEFAULT: "#807EB4",
                    50: "#F2F2F7",
                    100: "#E6E5F0",
                    200: "#CCCCE1",
                    300: "#B3B2D2",
                    400: "#9998C3",
                    500: "#807EB4",
                    600: "#5E5C9D",
                    700: "#49487A",
                    800: "#343357",
                    900: "#1F1E33",
                },
            },
        },
    },

    variants: {
        extend: {
            opacity: ["disabled"],
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
