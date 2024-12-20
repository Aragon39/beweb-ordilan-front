module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                refine: {
                    "0%": { left: "0%" },
                    "20%": { left: "-50%" },
                    "40%": { left: "0%" },
                    "60%": { left: "50%" },
                    "80%": { left: "0%" },
                    "100%": { left: "0%" },
                },
                rotate: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'refine-slide': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-100%)' },
                },
                'spin-slow': {
                    'from': { transform: 'rotate(0deg)' },
                    'to': { transform: 'rotate(360deg)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' }, // Commence en dehors de l'écran à gauche
                    '100%': { transform: 'translateX(0)', opacity: '1' }, // Fin à sa position d'origine
                },
                slideOut: {
                    '0%': { transform: 'translateX(0)', opacity: '1' }, // Commence à sa position d'origine
                    '100%': { transform: 'translateX(100%)', opacity: '0' }, // Fin en dehors de l'écran à droite
                },
            },
            animation: {
                slideIn: 'slideIn 3s ease-in-out',
                slideOut: 'slideOut 3s ease-in-out',
                fade: 'fadeIn 10s ease-in-out',
                refine: 'refine 2s ease-in-out infinite',
                rotate: 'rotate 15s linear infinite',
                'spin-slow': 'spin-slow 87s linear infinite',
                'refine-slide': 'refine-slide 5s ease-out',
                'slide-down': 'slideDown 0.5s ease forwards',
                'slide-up': 'slideUp 0.5s ease forwards',
            },
            spacing: {
                '1000': '1000px', // Ajoute une perspective de 1000px
            },
            backgroundImage: {
                menu: "url('src/assets/image/Fond Circuit electronique.png')",
                ficheclients: "url('src/assets/image/fiche client.jpeg')",
            },
            colors: {
                perano: {
                    '50': '#f0f5fe',
                    '100': '#dce7fd',
                    '200': '#c1d5fc',
                    '300': '#a8c7fa',
                    '400': '#6699f4',
                    '500': '#4274ef',
                    '600': '#2c55e4',
                    '700': '#2441d1',
                    '800': '#2336aa',
                    '900': '#223386',
                    '950': '#192152',
                },
                primary: {
                    '50': '#EFF6FF',
                    '100': '#DBEAFE',
                    '200': '#BFDBFE',
                    '300': '#93C5FD',
                    '400': '#60A5FA',
                    '500': '#3B82F6',
                    '600': '#2563EB',
                    '700': '#1D4ED8',
                    '800': '#1E40AF',
                    '900': '#1E3A8A',
                },
                secondary: {
                    '50': '#F5F3FF',
                    '100': '#EDE9FE',
                    '200': '#DDD6FE',
                    '300': '#C4B5FD',
                    '400': '#A78BFA',
                    '500': '#9333EA',
                    '600': '#7E22CE',
                    '700': '#6B21A8',
                    '800': '#581C87',
                    '900': '#3B0F5C',
                },
                accent: {
                    '50': '#FEFCE8',
                    '100': '#FEF9C3',
                    '200': '#FEE68C',
                    '300': '#FCD34D',
                    '400': '#FBBF24',
                    '500': '#F59E0B',
                    '600': '#D97706',
                    '700': '#B45309',
                    '800': '#92400E',
                    '900': '#78350F',
                },
                danger: {
                    '50': '#FEF2F2',
                    '100': '#FEE2E2',
                    '200': '#FECACA',
                    '300': '#FCA5A1',
                    '400': '#F87171',
                    '500': '#EF4444',
                    '600': '#DC2626',
                    '700': '#B91C1C',
                    '800': '#991B1B',
                    '900': '#7F1D1D',
                },
                success: {
                    '50': '#ECFDF5',
                    '100': '#C6F6D5',
                    '200': '#9AE6B4',
                    '300': '#68D391',
                    '400': '#48BB78',
                    '500': '#4CAF50',
                    '600': '#38A169',
                    '700': '#2F855A',
                    '800': '#276749',
                    '900': '#22543D',
                },
                info: {
                    '50': '#EBF8FF',
                    '100': '#BEE3F8',
                    '200': '#90CDF4',
                    '300': '#63B3ED',
                    '400': '#4299E1',
                    '500': '#3182CE',
                    '600': '#2B6CB0',
                    '700': '#2C5282',
                    '800': '#2A4361',
                    '900': '#1A365D',
                },
                warning: {
                    '50': '#FFFBEB',
                    '100': '#FEF3C7',
                    '200': '#FDE68A',
                    '300': '#FCD34D',
                    '400': '#FBBF24',
                    '500': '#F59E0B',
                    '600': '#D97706',
                    '700': '#B45309',
                    '800': '#92400E',
                    '900': '#78350F',
                },
                customGray: {
                    '50': '#F9FAFB',
                    '100': '#F3F4F6',
                    '200': '#E5E7EB',
                    '300': '#D1D5DB',
                    '400': '#9CA3AF',
                    '500': '#6B7280',
                    '600': '#4B5563',
                    '700': '#374151',
                    '800': '#1F2937',
                    '900': '#111827',
                },
                customBlack: '#111827',
                customWhite: '#FFFFFF',
                lightGray: '#F3F4F6',
                darkGray: '#374151',
                teal: {
                    '50': '#F0FDFA',
                    '100': '#CCFBF1',
                    '200': '#99F6E4',
                    '300': '#5ED3C3',
                    '400': '#2DD4BF',
                    '500': '#14B8A6',
                    '600': '#0D9488',
                    '700': '#0F766E',
                    '800': '#115E59',
                    '900': '#134E4A',
                },
                orange: {
                    '50': '#FFFBEB',
                    '100': '#FEF3C7',
                    '200': '#FCD34D',
                    '300': '#FBBF24',
                    '400': '#F59E0B',
                    '500': '#D97706',
                    '600': '#B45309',
                    '700': '#A95C09',
                    '800': '#92400E',
                    '900': '#78350F',
                },
                purple: {
                    '50': '#F5F3FF',
                    '100': '#EDE9FE',
                    '200': '#DDD6FE',
                    '300': '#C4B5FD',
                    '400': '#A78BFA',
                    '500': '#9333EA',
                    '600': '#7E22CE',
                    '700': '#6B21A8',
                    '800': '#581C87',
                    '900': '#3B0F5C',
                },
                red: {
                    '50': '#FEF2F2',
                    '100': '#FEE2E2',
                    '200': '#FECACA',
                    '300': '#FCA5A1',
                    '400': '#F87171',
                    '500': '#EF4444',
                    '600': '#DC2626',
                    '700': '#B91C1C',
                    '800': '#991B1B',
                    '900': '#7F1D1D',
                },
                indigo: {
                    '50': '#E0E7FF',
                    '100': '#C7D2FE',
                    '200': '#A5B4FC',
                    '300': '#818CF8',
                    '400': '#6366F1',
                    '500': '#4F46E5',
                    '600': '#4338CA',
                    '700': '#3730A3',
                    '800': '#312E81',
                    '900': '#1E1A78',
                },
                blue: {
                    '50': '#EFF6FF',
                    '100': '#DBEAFE',
                    '200': '#BFDBFE',
                    '300': '#93C5FD',
                    '400': '#60A5FA',
                    '500': '#3B82F6',
                    '600': '#2563EB',
                    '700': '#1D4ED8',
                    '800': '#1E40AF',
                    '900': '#1E3A8A',
                },
            },
        },
    },
    plugins: [],
};
