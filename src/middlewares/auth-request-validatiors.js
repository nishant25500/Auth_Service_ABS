const validateUserAuth = (req,res,next) =>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            data: {},
            message: 'Something went wrong',
            err: 'Required field is missing in the request',
            success: false
        })
    }
    next();
}

module.exports = {
    validateUserAuth
}
