const path = require('path');

module.exports = {
    publicPath: '/webGl/',
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        }
    }
}
