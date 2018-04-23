var gulp = require('gulp');
var server = require('gulp-webserver');
var data = require('./src/data/data.json')

gulp.task('default',function(){
    gulp.src('src')
        .pipe(server({
            port:7777,
            livereload:true,
            open:true,
            middleware:function(req,res,next){
                if(req.url === '/list'){
                    res.end(JSON.stringify(data))
                }
                next()
            }
        }))
})
