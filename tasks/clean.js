const gulp = require('gulp');
var del = require('del');

gulp.task('clean', () => {
  return del([
    'public/'
  ])
});
