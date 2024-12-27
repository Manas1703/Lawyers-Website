var express = require('express');
var router = express. Router();
var database = require('../database');
router.get("/", function(request, response, next){
var query = "SELECT * FROM sample_data ORDER BY id DESC";
I
database.query(query, function(error, data){
    if(error)
    {
    throw error;
    }
    else
    {
    response.render('sample_data', {title: 'Node.js MySQL CRUD Application'})
    }
    }); 
});

router.get("/add", function(request, response,next){

});

module.exports = router;