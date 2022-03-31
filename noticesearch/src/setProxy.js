const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("./api/notice", {
      target: "https://openapi.pknu.kr",
      changeOrigin: true,
    })
  );
};
