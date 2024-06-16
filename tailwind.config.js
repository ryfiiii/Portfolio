/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'splash-image': "url('./assets/images/splash.jpg')",
                'skill-image': "url('./assets/images/skill.jpg')",
                'contact-image': "url('./assets/images/contact.jpg')",
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'noto-sans': ['Noto Sans JP', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

