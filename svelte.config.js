import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		package: {
			exports: (filepath) => {
			  return filepath.endsWith("index.ts");
			},
			files: (filepath) => {
				
			  return !filepath.endsWith(".test.ts") && !filepath.endsWith(".stories.svelte");
			},
		  },
	}
};

export default config;
