import{ config } from "dotenv";
config()
import pkg from 'jsonwebtoken';
const {sign, verify} = pkg;

function createToken(user){
    return sign({
        emailAdd: user.emailAdd,
        userPwd: user.userPwd
    },
    process.env.SECRET_KEY,
    {
        expiresIn:'1h'
    }
    )
}

function verifyAToken(req, res, next) {
    // Retrieve the token from the browser
    const token = req?.header['Authorization']
    if(token) {
        if(verify(token, process.env.SECRET_KEY)){
            next()
        }else {
            res?.json({
                status: res.statusCode,
                msg: "Please provide the correct credentials"
            })
        }
    }else{
        res?.json({
            status: res.statusCode,
            msg: "Please login."
        })
    }
}
export{
    createToken,
    verifyAToken
}
