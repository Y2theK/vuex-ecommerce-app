const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //aliases go here
        "@t": path.resolve(__dirname, "template"),
        "@a": path.resolve(__dirname),
      },
    },
  },
};
