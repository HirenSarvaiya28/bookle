const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    
    try {

        const token = req.headers.authorization;

        if(!token){
            return res.status(501).send({
                success : false,
                message: "token is require"
            })
        }

        const newtoken = token.slice(7);
        
        jwt.verify(newtoken, process.env.JWT_SECRET, (err, decode)=> {
            if(err){
                return res.status(401).send({
                    success : false,
                    message : "Token is not valid"
                })
            }
            req.user = decode.payload;
            return next();
        })
        
    } catch (error) {
        return res.status(401).send({
            success : false,
            err : error
        })
    }
}

module.exports = {
    verifyToken
};