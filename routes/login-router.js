const express = require('express');
const passport = require("passport");
const router = express.Router();


router.post('/', function(req, res, next) {
    if (typeof req.body.email === 'undefined') return res.json({ success: false, message: 'Email not supplied.' });
    if (typeof req.body.password === 'undefined') return res.json({ success: false, message: 'Password not supplied.' });
    if (req.body.password.length === 0) return res.json({ success: false, message: 'Password not supplied.' });

    passport.authenticate('local', function(err, seller, info) {
        if (!seller) return res.json({ success: false, message: info.message });
        res.json({ success: true });

    })(req, res, next);

});

router.get('/me',
(req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ message: "You need to login" })
    } else {
        next();
    }
}, (req, res) => {
    res.send({ user: req.user });
})


module.exports = router;