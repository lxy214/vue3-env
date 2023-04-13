
// vue.config.js
module.exports = {
	// 基本路径
	publicPath: "./",
	// 输出文件目录
	outputDir: process.env.outputDir,
	configureWebpack: {
		resolve: {
		  alias: {
				'@views': '@/views',
				'@components': '@/components',
				'@common': '@/components/_common',
				'@images': '@/assets/images',
				'@constants': '@/constants',
				'@assets': '@/assets'
		  }
		}
	},
};