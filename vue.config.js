const path = require('path');

module.exports = {
    outputDir: "./docs",
    publicPath: '/webGl/',
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        }
    }
}
