var express = require('express');
var router = express.Router();
const productHelpers = require('../helpers/product-helpers')
const userHelpers =require('../helpers/user-helpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProducts().then((products) => {
    console.log(products)
    res.render("users/view-products", {  products })


  })

 
});
router.get('/login',(req,res)=>{
  res.render('users/login')



});
router.get('/signup',(req,res)=>{
  res.render("users/signup")

});
router.post('/signup',(req,res)=>{
 
  userHelpers.doSignup(req.body).then((response)=>{
    console.log(response);
  })


})

module.exports = router;
