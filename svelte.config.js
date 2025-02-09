import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess(),
  onwarn: (warning, handler) => {
    if (warning.code.startsWith('a11y-')) {
      return;
    }

    handler(warning);
  },
};
