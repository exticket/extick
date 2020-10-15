function loginRequired(req, res, next) {
    if (!req.user) {
        return res.status(401).send({ message: "You need to login" })
    } else {
        next();
    }
}

module.exports = { 
    loginRequired 
}