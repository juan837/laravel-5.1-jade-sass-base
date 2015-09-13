var gulp = require('gulp');
var elixir = require('laravel-elixir');
var $ = require('gulp-load-plugins')();
var path = require('path');

require('laravel-elixir-jade');
require('laravel-elixir-livereload');

var paths = {
 //src: 'src',
 //tmp: '.tmp',
 dist: 'public',
 //coffee: 'src/coffee/**/*.coffee',
 //componentes: 'src/componentes/',
 //sass: 'src/stylesheets/**/*.scss',
 //stylesheets: 'src/stylesheets/**/*.{sass,scss,css}',
 //pages: 'src/templates/pages/*.haml',
 //partials: 'src/templates/partials/**/*.haml',
 //layouts: 'src/templates/layouts/*.haml',
 images: 'resources/assets/images/**/*',
 //fonts: 'src/fonts/**/*.{eot,svg,ttf,woff}'
};


// aca se coloca la tarea de compresion de imagenes
gulp.task('imagenes', function(){
 return gulp.src(paths.images)
     .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true,
     })))
     .pipe(gulp.dest(path.join(paths.dist, 'images')));
});

//gulp.task('watch', function() {
// //gulp.watch([paths.pages, paths.partials, paths.layouts], ['armar']);
// //gulp.watch([paths.sass], ['sass']);
// gulp.watch([paths.images], ['imagenes']);
//});

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');

    mix.jade({
     baseDir: './resources',
     blade: true,
     dest: '/views/',
     pretty: true,
     search: '**/*.jade',
     src: '/jade/'
    },'resources/jade/**/*.jade');

    mix.task('imagenes', 'resources/assets/images/**/*.*');

    mix.livereload();
});
