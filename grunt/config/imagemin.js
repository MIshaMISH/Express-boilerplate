module.exports = {
    dist: {
        options: {
            optimizationLevel: 3,
            svgoPlugins: [{removeViewBox: false}]
        },
        files: [{
            expand: true,
            cwd: '<%= project.app %>/public/front/src/images',
            src: '**/*.{png,jpg,jpeg,gif,svg}',
            dest: '<%= project.temp %>/images'
        }]
    }
};