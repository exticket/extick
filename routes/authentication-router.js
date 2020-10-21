const express = require('express');
const passport = require("passport");
const router = express.Router();


function validateLoginDetails(req, res, next) {
    if (typeof req.body.email === 'undefined') return res.json({ success: false, message: 'Email not supplied.' });
    if (typeof req.body.password === 'undefined') return res.json({ success: false, message: 'Password not supplied.' });
    if (req.body.password.length === 0) return res.json({ success: false, message: 'Password not supplied.' });
    next();
}

function ourAuth(req, res, next) {
    return passport.authenticate('local', (err, seller, info) => {
        if (!seller) return res.json({ success: false, message: info.message });

        return passport.authenticate('local')(req, res, next);
    })(req, res, next);
}

router.post('/login', validateLoginDetails, ourAuth, (req, res) => {
    res.send({ ok: true });
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

router.get('/logout', function(req, res){
    req.logout();
    req.session.destroy();

    return res.send({ message: "logout now" })  });

module.exports = router;