'use strict';

module.exports = function (grunt) {
	var gulp 	   = require('gulp'),
		styleguide = require('sc5-styleguide'),
        buildPath = './',
        styleguideAppRoot = '/styleguide',
        styleguideBuildPath = buildPath + styleguideAppRoot;

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-gulp');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['postcss:dist', 'clean:customjsmin','concat', 'uglify', 'clean:customjs']);
	grunt.registerTask('sass', ['compass:dist', 'watch:scss']);
	grunt.registerTask('styleguide', ['gulp:styleguide-generate', 'gulp:styleguide-applystyles']);
	grunt.registerTask('production', ['postcss:dist', 'clean:customjsmin','concat', 'uglify', 'clean:customjs']);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		compass: {
			dist: {
				options: {
					sassDir: './sass',
					cssDir: './assets/css',
					environment: 'production',
					outputStyle: 'compact'
				}
			}
		},

        clean: {
            customjs: {
                src: ['./assets/js/raddish.js']
            },
            customjsmin: {
                src: ['./assets/js/raddish.min.js']
            }
        },

        concat: {
            options: {
                separator: ''
            },
            dist: {
                src: ['./assets/js/*.js'],
                dest: './assets/js/raddish.js'
            }
        },

        uglify: {
            my_target: {
                files: {
                    './assets/js/raddish.min.js': ['./assets/js/raddish.js']
                }
            }
        },

		postcss: {
			options: {
				map: false,
				processors: [
					//require('pixrem')(), // add fallbacks for rem units
					require('autoprefixer')({
						browsers: ['last 2 versions', 'Firefox <= 20', 'ie 8', 'ie 9', '> 1%'],
					}), // add vendor prefixes
					require('cssnano')() // minify the result
				],
				main: {
					expand: false,
					flatten: true,
					// src: './stylesheets',
					src: 'assets/css/*.css',
					dest: 'assets/css'
				}
			},
			dist: {
				src: './assets/css/*.css'
			}
		},

		gulp: {
            "styleguide-generate": function () {
                return gulp.src(['./sass/**/*.scss'])
                    .pipe(styleguide.generate({
                        title: 'Raddish Styleguide',
                        appRoot: styleguideAppRoot, // This is where the styleguide is rendered
                        overviewPath: 'overview.md',
                        disableEncapsulation: true,
                        disableHtml5Mode: true,
                        previousSection: true,
                        nextSection: true,
                        extraHead: []
                    }))
                    .pipe(gulp.dest(styleguideBuildPath)); // This is where the styleguide source files get rendered
            },
            "styleguide-applystyles": function () {
                return gulp.src([
                        'assets/css/raddish.css'
                    ])
                    .pipe(styleguide.applyStyles())
                    .pipe(gulp.dest(styleguideBuildPath));
            }
        },

		watch: {
			scss: {
				files: ['./sass/**/*.scss'],
				tasks: ['compass', 'gulp:styleguide-generate', 'gulp:styleguide-applystyles']
			}
		}
	});
};