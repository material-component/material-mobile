const path = require('path')
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    // config.module.rules.push({
    //   test: /\.less$/,
    //   use: ['less-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });

    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src')
    }

    return config
  }
}
