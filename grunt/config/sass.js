'use strict';

module.exports = {
    dist: {
        options: {
            style: 'expanded',
            sourcemap: 'none'
        },
        files: {
            '<%= project.styles.dist %>/main.css': '<%= project.styles.src %>/main.scss'
        }
    }
};
