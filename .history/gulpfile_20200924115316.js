var path = require('path')
var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var cssWrap = require('gulp-css-wrap')
gulp.task('css-wrap', function () {
  return gulp.src(path.resolve('./theme/index.css'))
    /* 找需要添加命名空间的css文件，支持正则表达式 */
    .pipe(cssWrap({
      selector: 'gray' /* 添加的命名空间 */
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('src/theme/gray')) /* 存放的目录 */
})
