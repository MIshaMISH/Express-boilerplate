var appPath = require('../../package.json').appPath || 'server';
var path = require('path');
var feAssets = path.join(appPath, 'public', 'front', 'src');

module.exports = {
    app: appPath,
    styles: {
        dist: path.join(feAssets, 'styles', 'css'),
        src: path.join(feAssets, 'styles', 'scss')
    },
    views: {
        src: path.join(feAssets, 'views')
    },
    script: {
        src: path.join(feAssets, 'js')
    },
    img: {
        src: path.join(feAssets, 'img')
    },
    temp: '.tmp',
    dist: path.join(appPath, 'public', 'front', 'dist')
};
