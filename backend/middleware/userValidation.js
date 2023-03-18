import {check, validationResult} from "express-validator"

export let userValidation = [
    check("userName").escape().trim().isLength({min:3}).withMessage("minimum 3 character required"),
    check("email").isEmail().toLowerCase().withMessage("please provide us with valid email"),
    check("password").exists().isLength({ min: 3 }).isStrongPassword().withMessage("please make sure that your password has at least one Capital letter, one lower case, one number, one symbol and at least 8 characters"),

    (req, res,next) =>{
        const result = validationResult(req)
        if(result.isEmpty()){
            next()
        }else{
            const error = result.errors.reduce((acc,curr) =>{
                acc[curr.param] = curr.msg 
                return acc
            }, {})
            next({message:error})
        }
    }
]