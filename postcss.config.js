// eslint-disable-next-line no-undef
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// Simplified configuration without PurgeCSS for now to fix build issues
export default {
  plugins: [
    tailwindcss,
    autoprefixer,
  ]
};
