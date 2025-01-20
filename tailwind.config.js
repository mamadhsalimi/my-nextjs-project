// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // فایل‌های داخل پوشه‌ی pages
    './components/**/*.{js,ts,jsx,tsx}', // فایل‌های داخل پوشه‌ی components
    './app/**/*.{js,ts,jsx,tsx}', // اگر از پوشه‌ی app استفاده می‌کنی (اختیاری)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}