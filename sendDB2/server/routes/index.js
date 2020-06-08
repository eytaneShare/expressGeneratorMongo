var express = require('express');
var router = express.Router();
const bodyParser= require('body-parser')
//var pp= bodyParser.urlencoded({ extended: true })
var dataC = require ('../public/javascripts/dataFromDb')
// data = JSON.stringify(data);
// console.log(dataFromDb())
/* GET home page. */
router.get('/', function(req, res, next) {
 //return (dataFromDb()) //dataFromDb.data()
 //console.log(dataFromDb())
 //console.log(dataC)
var data =dataC()
 res.send(data)
  //console.log(data)
 // next.send(data)
});
//console.log(data)
//console.log(dataFromDb())
module.exports = router;
