
var fs= require('fs')
const a = {name : 'nayana' , contact : '9892003868'}
const jsonstrting1 = JSON.stringify(a);
console.log(jsonstrting1);
fs.writeFile('json11.json',jsonstrting1, function(err,data){

    if(err) throw err; console.log('printed')
})

