'use strict';
module.exports = function (grunt) {

	var gulp 	   = require('gulp'),
		styleguide = require('sc5-styleguide');

	var buildPath = './';
	var styleguideAppRoot = '/styleguide';
	var styleguideBuildPath = buildPath + styleguideAppRoot;


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
					cssDir: './stylesheets',
					environment: 'production',
					outputStyle: 'compact'
				}
			}
		},

        clean: {
            customjs: {
                src: ['./js/custom/custom.js']
            },
            customjsmin: {
                src: ['./js/custom/custom.min.js']
            }
        },

        concat: {
            options: {
                separator: ''
            },
            dist: {
                src: ['./js/custom/*.js'],
                dest: './js/custom/custom.js'
            }
        },

        uglify: {
            my_target: {
                files: {
                    './js/custom/custom.min.js': ['./js/custom/custom.js']
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
					src: 'stylesheets/**/*.css',
					dest: 'stylesheets'
				}
			},
			dist: {
				src: './stylesheets/**/*.css'
			}
		},

		gulp: {
			'styleguide-generate': function() {
				return gulp.src(['./sass/**/*.scss'])
					.pipe(styleguide.generate({
						title: 'Raddish Styleguide',
						rootPath: styleguideBuildPath, // This is where resources are loaded from
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
			'styleguide-applystyles': function() {
				return gulp.src([
						'./stylesheets/screen.css'
					])
					.pipe(styleguide.applyStyles([
					]))
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

