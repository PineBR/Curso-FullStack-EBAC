const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-image')
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

function tarefasCSS(cb) {

    return gulp.src([
            './vendor/**/*.css',
            './src/css/style.css'
        ])
        .pipe(babel({
            comments: false,
            presents: ['@babel/env']
        }))
        .pipe(concat('styles.css'))         // mescla arquivos
        .pipe(cssmin())                     // minifica css
        .pipe(rename({ suffix: '.min'}))    // styles.min.css
        .pipe(gulp.dest('./dist/css'))      // cria arquivo em novo diretório
    return callback()

}

function tarefasJS(callback){

    return gulp.src([
            './vendor/**/*.js',
            './src/js/custom.js'
        ])
        .pipe(concat('scripts.js'))         // mescla arquivos
        .pipe(uglify())                     // minifica js
        .pipe(rename({ suffix: '.min'}))    // scripts.min.js
        .pipe(gulp.dest('./dist/js'))       // cria arquivo em novo diretório
    return callback()
}

function tarefasImagem(){
    
    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}

// POC - Proof of Concept
function tarefasHTML(callback){

    gulp.scrc('./src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'))
    return callback()
}

gulp.task('serve', function(){

    browserSync.init({
        server: {
            baseDir: "./src"
        }
    })
    gulp.watch('./src/**/*').on('change', process)
    gulp.watch('./scr/**/*').on('change', reload)
})

function end(cb){
    console.log("tarefas concluídas")
    return cb()
}

// series x parallel
const process = series( tarefasHTML, tarefasJS, tarefasCSS)

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem


exports.defult = process
