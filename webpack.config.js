const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");
const webpack = require('webpack');

module.exports = (env, argv) => {
    const prod = argv.mode === "production";
    
    return {
        mode: prod ? "production" : "development", //개발용인지 프로덕션 용인지 모드 확인
        devtool: prod ? "hidden-source-map" : "eval", //모드에 따라 SourceMap 확인
        entry: "./src/main.tsx", //시작점 경로를 지정하는 옵션, 해당 파일부터 필요한 모듈 로딩 및 하나의 파일로 묶기
        output: { //webpack이 번들링 결과물을 위치할 경로 및 이름
            path: path.join(__dirname, "/dist"),
            filename: "[name].js",
        },
        devServer: { //실시간으로 개발 모드로 개발하는 중 변경사항이 프로젝트에 반영
            port: 8080,
            hot: true,
            historyApiFallback:true
        },
        resolve: { //배열 안 확장자에 따라서 처리
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        module: { //loader 설정 /babel-loader, ts-loader 등
            rules: [
                {
                    test: /\.tsx?$/,
                    use: ["babel-loader", "ts-loader"],
                },
                {
                    test: /\.(png|jpeg|jpg|svg)?$/,
                    use: [
                        { loader: 'file-loader' }
                    ]
                },
                {
                    test: /\.(woff|woff2)$/,
                    use: [
                        { loader: 'url-loader' }
                    ]
                },
            ],
        },
        plugins: [ //부가기능을 할 플러그인을 설정
            new webpack.ProvidePlugin({ //자주 사용되는 모듈을 미리 등록하여 매번 작성하지 않게 하는 플러그인
                React: "react",
            }),
            new HtmlWebpackPlugin({ //HTML 파일에 번들링 된 자바스크립트 파일을 삽입해주고 이 플러그인으로 빌드하면 HTML 파일로 아웃풋에 생성
                template: './public/index.html',
                minify: process.env.NODE_ENV === 'production' ? {
                    collapseWhitespace: true, // 빈칸 제거
                    removeComments: true, // 주석 제거
                } : false,
            }),
            new CleanWebpackPlugin(), //번들링 할때마다 이전 번들링 결과 제거
        ],
    }
};