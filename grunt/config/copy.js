'use strict';

module.exports = {
    all: {
        files: [
            {
                expand: true,
                cwd: '<%= project.temp %>/css/',
                src: ['**/*.min.css'],
                dest: '<%= project.dist %>/css/'
            },
            {
                expand: true,
                cwd: '<%= project.temp %>/js/',
                src: ['**/*.min.js'],
                dest: '<%= project.dist %>/js/'
            },
            {
                expand: true,
                cwd: '<%= project.temp %>/img/',
                src: ['**/*.{png,jpg,gif,svg}'],
                dest: '<%= project.dist %>/img/'
            },
            {
                expand: true,
                cwd: '<%= project.views.src %>',
                src: ['**/*.ejs'],
                dest: '<%= project.dist %>/views/'
            }
        ]
    }
};
