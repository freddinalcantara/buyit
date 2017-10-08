module.exports = (function(){
'use-strict';
const path          = require('path');

var router = require('express').Router();

router.get('/hello',function(request,response){
    response.status(200).send("hello world!");
});

router.get('/',function(request,response){
    //  response.sendFile(path.resolve('../public/assest/index.html'));
    response.render(path.resolve('../public/assest/index'));
})

//always remenber to return a router to work!!
return router;
})();