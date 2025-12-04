// eslint-disable-next-line no-undef
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  plugins: [
    tailwindcss,
    autoprefixer,
    isProduction && purgecss({
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: [
        'html',
        'body',
        /^dark/,
        /^light/,
        /^bg-/, 
        /^text-/, 
        /^border-/, 
        /^hover:/, 
        /^focus:/,
        /^active:/,
        /^group-hover:/,
        /^md:/,
        /^lg:/,
        /^xl:/,
        /^2xl:/,
        /^from-/, 
        /^to-/, 
        /^via-/, 
        /^opacity-/, 
        /^scale-/, 
        /^translate-/, 
        /^rotate-/, 
        /^animate-/
      ]
    })
  ].filter(Boolean)
};

export default config;
