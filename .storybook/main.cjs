const { mergeConfig } = require('vite');
const preprocess = require('svelte-preprocess');

module.exports = {
  async viteFinal(config, { configType }) {
    // return the customized config
    if (configType === 'PRODUCTION') {
    
     console.log(JSON.stringify(config, null, 1))
    //config.output.publicPath = "https://poketrax.github.io/tcg-case/";
    }
    return mergeConfig(config);
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-svelte-csf"
  ],
  framework: "@storybook/svelte",
  core: {
    "builder": "@storybook/builder-vite"
  },
  staticDirs: ['../static'],
  svelteOptions: {
    "preprocess": preprocess({
      typescript: true,
      postcss: true,
      sourceMap: true,
    }),
  }
}