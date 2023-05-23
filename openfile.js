var fs= require('fs');
fs.open('new1.txt', 'r+',function(err,fd){;
if(err) 
{
console.log('err');}
else
{
    console.log('file opened successfully');
    console.log(fd);
}
}
)

