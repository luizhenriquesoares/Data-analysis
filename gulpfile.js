var liveReload = require('gulp-livereload'),
    clean = require('rimraf'),
    sass = require('gulp-sass'),
    gulp = require('gulp');

/* variaveis de configurações */
var config = {
    assets_path: './resources/assets',
    build_path: './public/build',
    app_path: './app',
    public_path: './public'
};

// resources/assets/bower_components
config.bower_path = config.assets_path + '/bower_components';

// public/build/js
config.build_path_js = config.build_path + '/js';

// public/build/js/vendor
config.build_vendor_path_js = config.build_path_js + '/vendor';

/* arquivos js para modo desenvolvimento */
// public/build/js/vendor
config.vendor_path_js = [
    config.bower_path + '/jquery/dist/jquery.min.js',
    config.bower_path + '/angular/angular.min.js',
    config.bower_path + '/angular-ui-router/release/angular-ui-router.min.js',
    config.bower_path + '/angular-resource/angular-resource.min.js',
    config.bower_path + '/angular-animate/angular-animate.min.js',
    config.bower_path + '/angular-messages/angular-messages.min.js',
    config.bower_path + '/angular-strap/dist/modules/navbar.min.js',
    config.bower_path + '/angular-cookies/angular-cookies.min.js',
    config.bower_path + '/angular-chart.js/dist/angular-chart.min.js',
    config.bower_path + '/query-string/query-string.js',
    config.bower_path + '/chart.js/dist/Chart.min.js',
    config.bower_path + '/d3/d3.js',
    config.bower_path + '/nvd3/build/nv.d3.js',
    config.bower_path + '/angular-nvd3/dist/angular-nvd3.js',
    config.bower_path + '/angular-charts/dist/angular-charts.js',
    config.bower_path + '/bootstrap-sass/assets/javascripts/bootstrap.min.js',
    config.bower_path + '/remarkable-bootstrap-notify/dist/bootstrap-notify.min.js',
    config.bower_path + '/angular-notify/dist/angular-notify.min.js'

];

// public/build/css
config.build_path_css = config.build_path + '/css';

// public/build/css/vendor
config.build_vendor_path_css = config.build_path_css + '/vendor';

// public/build/vendor/css
config.vendor_path_css = [
    config.bower_path + '/animate.css/animate.min.css',
    config.bower_path + '/nvd3/build/nv.d3.min.css',
    config.bower_path + '/angular-notify/dist/angular-notify.min.css'
    // config.bower_path + '/pixeden-stroke-7-icon/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css'

];

// public/build/views
config.build_path_html = config.build_path + '/views';
// public/build/fonts
config.build_path_font = config.build_path + '/fonts';
// public/build/images
config.build_path_image = config.build_path + '/images';

/**************************/
/* Tarefas Gulp */ /******************************/

/* Task 1 - Copiar Arquivos fonts - Modo desenvolvimento */
// public/build/fonts
gulp.task('copy-font', function() {
    gulp.src([
            config.bower_path  + '/bootstrap/fonts/**/*',
            config.bower_path  + '/pixeden-stroke-7-icon/pe-icon-7-stroke/fonts/**/*',
            config.bower_path  + '/font-awesome/fonts/**/*',
            config.assets_path + '/fonts/**/*'
        ])
        .pipe(gulp.dest(config.build_path_font))
        .pipe(liveReload());
});

/*Task 2 - Copiar Arquivos images - Modo desenvolvimento */
// public/build/images
gulp.task('copy-image', function() {
    gulp.src([
            config.assets_path + '/img/**/*'
        ])
        .pipe(gulp.dest(config.build_path_image))
        .pipe(liveReload());
});

/* Task 3 - Copiar Arquivos html - Modo desenvolvimento */
// assert/js/views
gulp.task('copy-html', function() {
    gulp.src([
            config.app_path + '/js/views/**/*.html'
        ])
        .pipe(gulp.dest(config.build_path_html))
        .pipe(liveReload());

    gulp.src([
            config.app_path + '/*.html'
        ])
        .pipe(gulp.dest(config.public_path))
        .pipe(liveReload());
});

/* Task 4 - Copiar Arquivos css - Modo desenvolvimento */
//public/build/css
gulp.task('copy-styles', function() {
    gulp.src([
            config.assets_path + '/css/*.css'
        ])
        .pipe(gulp.dest(config.build_path_css))
        .pipe(liveReload());

    gulp.src(config.vendor_path_css)
        .pipe(gulp.dest(config.build_vendor_path_css))
        .pipe(liveReload());
});

/* Task 5 - Copiar Arquivos js - Modo desenvolvimento */
// public/build/js
gulp.task('copy-scripts', function() {

    gulp.src([
            config.app_path + '/js/**/*.js'
        ])
        .pipe(gulp.dest(config.build_path_js))
        .pipe(liveReload());

    gulp.src(config.vendor_path_js)
        .pipe(gulp.dest(config.build_vendor_path_js))
        .pipe(liveReload());

    gulp.src(config.assets_path + '/js/**/*.js')
        .pipe(gulp.dest(config.build_vendor_path_js))
        .pipe(liveReload());
});

/* Task 6 Compilar Sass*/
gulp.task('sass', function() {

    gulp.src([
            config.assets_path + '/sass/**/*.scss'
        ])
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest(config.build_path_css))
        .pipe(liveReload());
});


/* Task 6 - Tarefa para limpar pasta public/build */

gulp.task('clear-build-folder', function() {
    clean.sync(config.build_path);
});

/* Task 7 - Tarefa para modo desenvolvimento public/build */
// tarefa watch-dev
gulp.task('watch-dev', ['clear-build-folder'], function() {
    liveReload.listen();
    gulp.start('copy-styles', 'copy-scripts', 'copy-html', 'copy-font', 'copy-image', 'sass');
    gulp.watch(config.assets_path + '/**', ['copy-styles', 'copy-scripts', 'copy-html', 'sass']);
});
