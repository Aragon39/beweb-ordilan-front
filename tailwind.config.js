/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
        extend: {
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
                // Couleurs supplémentaires
                primary: {
                    '50': '#EFF6FF',       // Bleu très clair
                    '100': '#DBEAFE',      // Bleu clair
                    '200': '#BFDBFE',      // Bleu
                    '300': '#93C5FD',      // Bleu moyen
                    '400': '#60A5FA',      // Bleu vif
                    '500': '#3B82F6',      // Bleu principal
                    '600': '#2563EB',      // Bleu foncé
                    '700': '#1D4ED8',      // Bleu très foncé
                    '800': '#1E40AF',      // Bleu intense
                    '900': '#1E3A8A',      // Bleu profond
                },
                secondary: {
                    '50': '#F5F3FF',      // Violet très clair
                    '100': '#EDE9FE',     // Violet clair
                    '200': '#DDD6FE',     // Violet
                    '300': '#C4B5FD',     // Violet moyen
                    '400': '#A78BFA',     // Violet vif
                    '500': '#9333EA',     // Violet principal
                    '600': '#7E22CE',     // Violet foncé
                    '700': '#6B21A8',     // Violet très foncé
                    '800': '#581C87',     // Violet intense
                    '900': '#3B0F5C',     // Violet profond
                },
                accent: {
                    '50': '#FEFCE8',      // Jaune très clair
                    '100': '#FEF9C3',     // Jaune clair
                    '200': '#FEE68C',     // Jaune
                    '300': '#FCD34D',     // Jaune moyen
                    '400': '#FBBF24',     // Jaune vif
                    '500': '#F59E0B',     // Jaune principal
                    '600': '#D97706',     // Jaune foncé
                    '700': '#B45309',     // Jaune très foncé
                    '800': '#92400E',     // Jaune intense
                    '900': '#78350F',     // Jaune profond
                },
                danger: {
                    '50': '#FEF2F2',      // Rouge très clair
                    '100': '#FEE2E2',     // Rouge clair
                    '200': '#FECACA',     // Rouge
                    '300': '#FCA5A1',     // Rouge moyen
                    '400': '#F87171',     // Rouge vif
                    '500': '#EF4444',     // Rouge principal
                    '600': '#DC2626',     // Rouge foncé
                    '700': '#B91C1C',     // Rouge très foncé
                    '800': '#991B1B',     // Rouge intense
                    '900': '#7F1D1D',     // Rouge profond
                },
                success: {
                    '50': '#ECFDF5',      // Vert très clair
                    '100': '#C6F6D5',     // Vert clair
                    '200': '#9AE6B4',     // Vert
                    '300': '#68D391',     // Vert moyen
                    '400': '#48BB78',     // Vert vif
                    '500': '#4CAF50',     // Vert principal
                    '600': '#38A169',     // Vert foncé
                    '700': '#2F855A',     // Vert très foncé
                    '800': '#276749',     // Vert intense
                    '900': '#22543D',     // Vert profond
                },
                info: {
                    '50': '#EBF8FF',      // Bleu très clair
                    '100': '#BEE3F8',     // Bleu clair
                    '200': '#90CDF4',     // Bleu
                    '300': '#63B3ED',     // Bleu moyen
                    '400': '#4299E1',     // Bleu vif
                    '500': '#3182CE',     // Bleu principal
                    '600': '#2B6CB0',     // Bleu foncé
                    '700': '#2C5282',     // Bleu très foncé
                    '800': '#2A4361',     // Bleu intense
                    '900': '#1A365D',     // Bleu profond
                },
                warning: {
                    '50': '#FFFBEB',      // Jaune très clair
                    '100': '#FEF3C7',     // Jaune clair
                    '200': '#FDE68A',     // Jaune
                    '300': '#FCD34D',     // Jaune moyen
                    '400': '#FBBF24',     // Jaune vif
                    '500': '#F59E0B',     // Jaune principal
                    '600': '#D97706',     // Jaune foncé
                    '700': '#B45309',     // Jaune très foncé
                    '800': '#92400E',     // Jaune intense
                    '900': '#78350F',     // Jaune profond
                },
                // Autres couleurs personnalisées
                customGray: {
                    '50': '#F9FAFB',     // Gris très clair
                    '100': '#F3F4F6',    // Gris clair
                    '200': '#E5E7EB',    // Gris
                    '300': '#D1D5DB',    // Gris moyen
                    '400': '#9CA3AF',    // Gris vif
                    '500': '#6B7280',    // Gris principal
                    '600': '#4B5563',    // Gris foncé
                    '700': '#374151',    // Gris très foncé
                    '800': '#1F2937',    // Gris intense
                    '900': '#111827',    // Gris profond
                },
                customBlack: '#111827',   // Noir personnalisé
                customWhite: '#FFFFFF',   // Blanc personnalisé
                lightGray: '#F3F4F6',    // Gris clair
                darkGray: '#374151',     // Gris foncé
                teal: {
                    '50': '#F0FDFA',      // Teal très clair
                    '100': '#CCFBF1',     // Teal clair
                    '200': '#99F6E4',     // Teal
                    '300': '#5ED3C3',     // Teal moyen
                    '400': '#2DD4BF',     // Teal vif
                    '500': '#14B8A6',     // Teal principal
                    '600': '#0D9488',     // Teal foncé
                    '700': '#0F766E',     // Teal très foncé
                    '800': '#115E59',     // Teal intense
                    '900': '#134E4A',     // Teal profond
                },
                orange: {
                    '50': '#FFFBEB',      // Orange très clair
                    '100': '#FEF3C7',     // Orange clair
                    '200': '#FCD34D',     // Orange
                    '300': '#FBBF24',     // Orange moyen
                    '400': '#F59E0B',     // Orange vif
                    '500': '#D97706',     // Orange principal
                    '600': '#B45309',     // Orange foncé
                    '700': '#A95C09',     // Orange très foncé
                    '800': '#92400E',     // Orange intense
                    '900': '#78350F',     // Orange profond
                },
                purple: {
                    '50': '#F5F3FF',      // Violet très clair
                    '100': '#EDE9FE',     // Violet clair
                    '200': '#DDD6FE',     // Violet
                    '300': '#C4B5FD',     // Violet moyen
                    '400': '#A78BFA',     // Violet vif
                    '500': '#9333EA',     // Violet principal
                    '600': '#7E22CE',     // Violet foncé
                    '700': '#6B21A8',     // Violet très foncé
                    '800': '#581C87',     // Violet intense
                    '900': '#3B0F5C',     // Violet profond
                },
                red: {
                    '50': '#FEF2F2',      // Rouge très clair
                    '100': '#FEE2E2',     // Rouge clair
                    '200': '#FECACA',     // Rouge
                    '300': '#FCA5A1',     // Rouge moyen
                    '400': '#F87171',     // Rouge vif
                    '500': '#EF4444',     // Rouge principal
                    '600': '#DC2626',     // Rouge foncé
                    '700': '#B91C1C',     // Rouge très foncé
                    '800': '#991B1B',     // Rouge intense
                    '900': '#7F1D1D',     // Rouge profond
                },
                indigo: {
                    '50': '#E0E7FF',      // Indigo très clair
                    '100': '#C7D2FE',     // Indigo clair
                    '200': '#A5B4FC',     // Indigo
                    '300': '#818CF8',     // Indigo moyen
                    '400': '#6366F1',     // Indigo vif
                    '500': '#4F46E5',     // Indigo principal
                    '600': '#4338CA',     // Indigo foncé
                    '700': '#3730A3',     // Indigo très foncé
                    '800': '#312E81',     // Indigo intense
                    '900': '#1E1A78',     // Indigo profond
                },
                blue: {
                    '50': '#EFF6FF',      // Bleu très clair
                    '100': '#DBEAFE',     // Bleu clair
                    '200': '#BFDBFE',     // Bleu
                    '300': '#93C5FD',     // Bleu moyen
                    '400': '#60A5FA',     // Bleu vif
                    '500': '#3B82F6',     // Bleu principal
                    '600': '#2563EB',     // Bleu foncé
                    '700': '#1D4ED8',     // Bleu très foncé
                    '800': '#1E40AF',     // Bleu intense
                    '900': '#1E3A8A',     // Bleu profond
                },
            },
        },
    },
    plugins: [],
}
