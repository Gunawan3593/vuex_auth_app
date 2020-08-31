const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User');

/**
 * @route POST api/users/checkuser
 * @desc Check username exists
 * @access Public
 */
router.post('/checkuser', async (req, res) => {
    let {
        username,
    } = req.body
    // Check for the unique Username
    let data = await User.findOne({ 
        username : username
    });
    let response = {};
    if(data){
        response = {
            exists: true,
            msg: "Username already taken."
        }
    }else{
        response = {
            exists: false,
            msg: "Username is available."
        }
    }
    return res.json(response);
});

/**
 * @route POST api/users/checkemail
 * @desc Check Email exists
 * @access Public
 */
router.post('/checkemail', async (req, res) => {
    let {
        email,
    } = req.body
    // Check for the unique Email
    let data = await User.findOne({ 
        email : email
    });
    let response = {};
    if(data){
        response = {
            exists: true,
            msg: "Email already taken."
        }
    }else{
        response = {
            exists: false,
            msg: "Email is available."
        }
    }
    return res.json(response);
});

/**
 * @route POST api/users/checkupdemail
 * @desc Check email exists when update data
 * @access Public
 */
router.post('/checkupdemail', async (req, res) => {
    let {
        lastemail,
        email
    } = req.body
    // Check for the unique Email
    let data = await User.findOne({ 
        email : email
    });
    let response = {};
    if(data.email !== lastemail){
        response = {
            exists: true,
            msg: "Email already taken."
        }
    }else{
        response = {
            exists: false,
            msg: "Email is available."
        }
    }
    return res.json(response);
});

/**
 * @route POST api/users/register
 * @desc Register the user
 * @access Public
 */
router.post('/register', (req, res) => {
    let {
        name,
        username,
        email,
        password,
        confirm_password
    } = req.body
    
    // Check for empty value
    if (name == '') {
        return res.status(400).json({
            msg: "Name is required."
        });
    }

    if (username == '') {
        return res.status(400).json({
            msg: "Username is required."
        });
    }

    if (email == '') {
        return res.status(400).json({
            msg: "Email is required."
        });
    }

    if (password !== confirm_password) {
        return res.status(400).json({
            msg: "Password do not match."
        });
    }

    // The data is valid and now we can register the user
    let  newUser = new User({
        name,
        username,
        password,
        email
    });

    // Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "Hurry! User is now registered."
                });
            });
        });
    });
});
/**
 * @route POST api/users/register
 * @desc Register the user
 * @access Public
 */
router.post('/updateuser', (req, res) => {
    let {
        name,
        username,
        email,
        password,
        confirm_password
    } = req.body

    // Check for empty value
    if (name == '') {
        return res.status(400).json({
            msg: "Name is required."
        });
    }

    if (username == '') {
        return res.status(400).json({
            msg: "Username is required."
        });
    }

    if (email == '') {
        return res.status(400).json({
            msg: "Email is required."
        });
    }

    if (password !== confirm_password) {
        return res.status(400).json({
            msg: "Password do not match."
        });
    }

    //Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            // The data is valid and now we can register the user
            User.findOne({ 
                username: username 
            },function(err, user){
                if(err) {
                    throw err;
                }else{
                    user.name = name;
                    user.email = email;
                    user.password = hash;
                    user.save().then(user=>{
                        if(user) {
                            return res.status(201).json({
                                success: true,
                                msg: "Hurry! User is now updated."
                            });
                        }
                    });
                }
            });
        });
    });   
});
/**
 * @route POST api/users/login
 * @desc Login the user
 * @access Public
 */
router.post('/login', (req, res) => {
    User.findOne({ 
        username: req.body.username 
    }).then(user => {
        if (!user) {
            return  res.status(404).json({
                msg: "Username is not found.",
                success: false
            });
        }
        // If there is user we are now going to compare the password
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if(isMatch) {
                // User's password is correct and we need to send the JSON Token for that user
                const payload = {
                    _id: user._id,
                    username: user.username,
                    name: user.name,
                    email: user.email
                }
                jwt.sign(payload, key, { 
                    expiresIn: 604800
                },(err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `bearer ${token}`,
                        user: user,
                        msg: "Hurry! You are logged in now."
                    })
                });
            }else{
                return res.status(404).json({
                    msg: "Incorrect Password.",
                    success: false
                })
            }
        })
    });
});
/**
 * @route POST api/users/profile
 * @desc Return the user data
 * @access Private
 */
router.get('/profile', passport.authenticate('jwt', { 
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

module.exports = router;