const path = require('path');

module.exports = {
    outputDir: "./docs",
    publicPath: '/webGl/',
    assetsDir: 'assets',
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        }
    }
}
