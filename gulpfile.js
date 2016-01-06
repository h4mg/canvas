var gulp = require('gulp');
//importing a bunch of JS tools , similar to partials
	sass = require('gulp-sass');
	concat = require('gulp-concat');
	autoprefixer = require('gulp-autoprefixer');
	browserSync = require('browser-sync');
	reload = browserSync.reload;
// task takes 2 arguements

// like prepros
gulp.task('styles', function(){
	// Gulp.js makes use of pipes for streaming data that needs to be processed. 
	return gulp.src('styles/*.scss').pipe(sass().on('error', sass.logError)).pipe(concat('style.css')).pipe(autoprefixer('last 2 versions', 'ie8')).pipe(gulp.dest('sass/')).pipe(reload({stream:true}));
});

gulp.task('js', function(){
	return gulp.src("scripts/*.js").pipe(jshint()).pipe(reload({stream:true}));
});

gulp.task('syncTask', function(){
	browserSync.init({
		server: {
			baseDir: './'
		}

	});
});


// like autocompiler in prepros
gulp.task('watch', function(){
	gulp.watch('sass/*.scss', ['styles']);
	gulp.watch('scripts/*.js', ['js']);
	gulp.watch('*.html', reload);
});

gulp.task('default', ['syncTask', 'styles', 'js', 'watch']); 