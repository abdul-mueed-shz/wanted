/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "210px": "13.125rem", // Custom width for 210px in rem
        "330px": "20.625rem", // Custom width for 330px in rem
        "718px": "44.875rem", // Custom width for 718px in rem
      },
      maxWidth: {
        "210px": "13.125rem", // Custom width for 210px in rem
        "330px": "20.625rem", // Custom width for 330px in rem
        "718px": "44.875rem", // Custom width for 718px in rem
      },
      fontSize: {
        "241px": "15.0625rem", // Custom size for 241px in rem
      },
      inset: {
        "-1.875rem": "-1.875rem", // Custom left and right value for -30px in rem
        "-1.25rem": "-1.25rem", // Custom left and right value for -20px in rem
      },
    },
  },
  plugins: [],
};
