export const typography = {
  h1: 'text-4xl md:text-5xl font-bold',
  h2: 'text-3xl md:text-4xl font-bold',
  h3: 'text-2xl md:text-3xl font-semibold',
  h4: 'text-xl md:text-2xl font-semibold',
  h5: 'text-lg md:text-xl font-medium',
  body1: 'text-base',
  body2: 'text-sm',
  caption: 'text-xs',
};

export const colors = {
  text: {
    primary: 'text-gray-900 dark:text-white',
    secondary: 'text-gray-600 dark:text-gray-300',
    accent: 'text-blue-600 dark:text-blue-400',
  },
  bg: {
    primary: 'bg-white dark:bg-slate-900',
    secondary: 'bg-gray-50 dark:bg-slate-800/50',
    accent: 'bg-blue-100 dark:bg-blue-900/30',
  },
  border: {
    primary: 'border-gray-200 dark:border-slate-700',
    accent: 'border-blue-200 dark:border-blue-800',
  },
};

export const spacing = {
  section: 'py-12 md:py-16',
  container: 'px-4 sm:px-6 lg:px-8',
  gap: 'gap-6',
};

export const transitions = {
  default: 'transition-all duration-300',
  hover: 'hover:opacity-90',
  active: 'active:scale-95',
};
