const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.jsx", // webpack 최초 진입점(엔트리 포인트) 파일 경로를 설정합니다.
  output: {
    // webpack을 실행한 후의 결과물의 이름/경로 등을 설정합니다.
    filename: "main.js",
    path: path.resolve(__dirname, "dist/"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 번들링 파일을 주입하여 번들링 폴더로 복사할 대상 HTML 파일을 설정합니다.
    }),
  ],
  devServer: {
    // webpack-dev-server 옵션을 설정합니다.
    // host: "localhost",
    // port: 3000, // 별도로 설정 안하면 8080 으로 뜸
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true, // 404 페이지 대신 index.html로 이동합니다.
    hot: true, // 모듈 전체를 다시 로드하지 않고 변경된 사항만 갱신합니다.
    open: true,
  },
  resolve: {
    // resolve: import를 할 때 확장자를 생략할 수 있습니다.
    extensions: ["*", ".jsx", ".js"],
  },

  // babel 관련 옵션 설정
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // 해당 파일명으로 끝나면 babel-loader가 처리
        exclude: /node_modules/, // node_modules는 대상에서 제외
        use: {
          loader: "babel-loader", // 바벨 로더 추가
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
