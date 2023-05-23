var fs= require('fs');
//fs.readFile('new1.txt', function(err,data){
   // if(err)
   // {console.log(err);}
  //else{console.log(data.toString())}
//})
fs.rename('new1.txt','new2.txt', function(err){

    if(err){console.log(err);}
    else {console.log('file rename successfully!!');}


})