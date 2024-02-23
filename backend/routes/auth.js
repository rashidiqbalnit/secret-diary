const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

//Create a User using : POST "/api/auth/". Doesn't require auth.
router.post('/', [
    body('name','Enter a valid name').isLength({min: 3}),
    body('email','Enter a valid Email').isEmail(),
    body('password','Password must be atleast 5 charactor').isLength({min: 5}),
], (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    }).then(user => res.json(user))
      .catch(error => {console.log(error)
        res.json({error : 'Plese enter a unique value for email'})})
   
})


module.exports = router;