 module.exports = {
   purge: ["./src/**/*.{js,jsx,ts,tsx,html}"],
   theme: {
     extend: {
       colors: {
         customGreen: {
           // Define custom green shades
           50: "#f0fdf4",
           100: "#dcfce7",
           200: "#bbf7d0",
           300: "#86efac",
           400: "#4ade80",
           500: "#22c55e", // Define the main color
           600: "#16a34a",
           700: "#15803d",
           800: "#166534",
           900: "#14532d",
           950: "#042f2e",
           960: "#623411",
         },
         customTeal: {
           // Define custom teal shades
           50: "#f0fdfa",
           100: "#ccfbf1",
           200: "#99f6e4",
           300: "#5eead4",
           400: "#2dd4bf",
           500: "#14b8a6", // Define the main color
           600: "#0d9488",
           700: "#0f766e",
           800: "#115e59",
           900: "#134e4a",
         },
         customCyan: {
           // Define custom cyan shades
           50: "#e3fafc",
           100: "#c5f6fa",
           200: "#99e9f2",
           300: "#66d9e8",
           400: "#3bc9db",
           500: "#22a6b3", // Define the main color
           600: "#0d8fa5",
           700: "#0a6e8c",
           800: "#0a4c6e",
           900: "#083f5b",
           950: "#083344",
         },
       },
     },
   },
 };
