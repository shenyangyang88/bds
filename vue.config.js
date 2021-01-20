module.exports = {
  devServer: {
    proxy: {
      "/pkusite-web/": {
        target: "http://api.pup.cn/pkusite-web",
        pathRewrite: { "^/pkusite-web": "" }
      }
    }
  }
};
