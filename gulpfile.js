var gulp = require("gulp"),
    browserSync = require('browser-sync');
    // modernizer = require('gulp-modernizer');

// Сервер
gulp.task('server', function () {  
  browserSync({
    port: 9000,
    server: {
      baseDir: 'app'
    }
  });
});

// Слежка
gulp.task('watch', function () {
  gulp.watch([
    'app/*.html',
    'app/js/*.js',
    'app/css/*.css'
  ]).on('change', browserSync.reload);
});

// Modernizr
// gulp.task('modernizer', function () {
//   gulp.src('app/js/*.js').pipe(modernizer(
//       {
//         // Подключаем необходимые опции
//         "options" : [
//           "setClasses", 
//           "html5shiv"
//         ],

//         // Подключаем необходимый набор тестов
//         "tests" : ['placeholder', 'cssanimation'],

//         // Собираем минифицированную версию
//         "uglify" : true,
//       }
//     )).pipe(gulp.dest("app/js/vendor"))
// });

// // Задача по-умолчанию
// gulp.task('default', ['modernizer', 'server', 'watch']);

gulp.task('default', ['server', 'watch']);