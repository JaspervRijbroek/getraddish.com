// Require Gulp
var gulp 		= require('gulp'); // https://github.com/gulpjs/gulp | http://gulpjs.com/

// Require Gulp Plugins
var less		= require('gulp-less'), 			// https://github.com/plus3network/gulp-less
	minifyCSS 	= require('gulp-minify-css'), 		// https://github.com/murphydanger/gulp-minify-css
	rename		= require('gulp-rename'), 			// https://github.com/hparra/gulp-rename
	concat 		= require('gulp-concat'), 			// https://github.com/contra/gulp-concat
	uglify 		= require('gulp-uglify'); 			// https://github.com/terinjokes/gulp-uglify

// Parent folder, you can change it if you have a different folder name
var parentFolder = 'assets/';

// Concatenate the scripts in the right order
var scriptsOrder = [
	parentFolder + 'js/dev/libs/*',				// Libs
	parentFolder + 'js/dev/libs/plugins/*.js', 	// Plugins
	parentFolder + 'js/dev/libs/spiders/*',			// Spiders
	parentFolder + 'js/dev/modules.js',			// Modules
	parentFolder + 'js/dev/custom.js' 			// Modules
];

// Compile Less files
gulp.task('less', function() {
	return 	gulp.src(parentFolder + 'less/style.less').
			pipe(less()).
			pipe(minifyCSS({
				mediaMerging: true
			})).
			pipe(rename({
				suffix: '.min'
			})).
			pipe(gulp.dest(parentFolder + 'css'));
});

// Concatenate JavaScript files
gulp.task('scripts', function () {
	return 	gulp.src(scriptsOrder).
			pipe(concat('all.js')).
			pipe(gulp.dest(parentFolder + 'js'));
});

// Concatenate and minify JavaScript files
gulp.task('scriptsMin', function () {
	return 	gulp.src(scriptsOrder).
			pipe(concat('all.min.js')).
			pipe(uglify()).
			pipe(gulp.dest(parentFolder + 'js'));
});

// Watch for file changes and trigger browser reload
gulp.task('watch', function () {
	gulp.watch(parentFolder + 'less/**/*.less', ['less']);
	gulp.watch(parentFolder + 'js/dev/**/*.js', ['scripts']);
});

// Development Build [run 'gulp dev' in your terminal]
gulp.task('dev', ['less', 'scripts', 'watch']);

// Production Build [run 'gulp prod' in your terminal]
gulp.task('prod', ['less', 'scriptsMin']);