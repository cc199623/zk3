var gulp = require('gulp');
var server = require('gulp-webserver');
var data = require('./src/data/data.json')

gulp.task('server',function(){
    gulp.src('src/index.html')
        .pipe(server({
            port:7777,
            livereload:true,
            host:'localhost',
            middleware:function(req,res,next){
                if(req.url === '/login'){
                    res.end(JSon.stringify(data))
                }
                next()
            }
        }))
})
gulp.task('default','server')