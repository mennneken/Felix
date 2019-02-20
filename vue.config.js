module.exports = {
  chainWebpack: config => {
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, { limit: 99999999 }));
  },

  publicPath: "/Felix/",
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  filenameHashing: false,
  css: undefined,

  pwa: {
    name: "Félix",
    themeColor: "#FF8D5F",
    msTileColor: "#FF8D5F",
    appleMobileWebAppStatusBarStyle: "#FFB191",
    iconPaths: {
      favicon32: "icons/favicon-32x32.png",
      favicon16: "icons/favicon-16x16.png",
      appleTouchIcon: "icons/apple-touch-icon-152x152.png",
      maskIcon: "icons/safari-pinned-tab.svg",
      msTileImage: "icons/msapplication-icon-144x144.png",
    },
  },

  pluginOptions: {
    svgSprite: {
      dir: "src/assets/icons",
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
        extract: true,
        spriteFilename: "img/icons.[hash:8].svg", // or 'img/icons.svg' if filenameHashing == false
      },
      pluginOptions: {
        plainSprite: true,
      },
    },
  },

  outputDir: undefined,
  baseUrl: '/Felix/',
  assetsDir: undefined
};
