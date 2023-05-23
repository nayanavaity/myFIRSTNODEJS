var fs= require('fs');
fs.stat('new1.txt',function(err, stats){
    if(err)
    {
        console.log(err);


    } else {
        console.log(stats.isFile());
        console.log(stats.isDirectory());
        console.log(stats);
    }



})