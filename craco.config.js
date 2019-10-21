const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const WebpackBar = require("webpackbar");
const CracoAntDesignPlugin = require("craco-antd");

const path = require("path");

// Don't open the browser during development
process.env.BROWSER = "none";

module.exports = {
    webpack: {
        devServer: {
            disableHostCheck: true
        },
        plugins: []
    },
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeThemeLessPath: path.join(
                    __dirname,
                    "src/customTheme.less"
                )
            }
        }
    ]
};