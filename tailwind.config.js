/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        fontFamily: {
          sans: [
            "Inter var, sans-serif",
            {
              fontFeatureSettings: '"cv11", "ss01"',
              fontVariationSettings: '"opsz" 32'
            },
          ],
        },
      },
  plugins: [

    require('autoprefixer'),
  ],
}
)
