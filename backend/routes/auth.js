const router = require("express").Router()
const User = require("../models/user")

//SIGN IN

router.post("/register", async (req, res)=> {
    try {
        const { email, username, password } = req.body
        const hashpassword = bcrypt.hashSync(password)
        const user = new User({ email, username, password:hashpassword })
        await user.save().then((res)=> res.status(200).json({message: "Sign Up Successfull"}))
    } catch (error) {
        res.status(400).json({ message: "User Aleready Exists..."})
    }
})

//Log IN

router.post("/signin", async (req, res)=> {
    try {
        const user = awaitUser.findOne({email:req.body.email})
        if(!user){
            res.status(200).json({message: "Please Sign Up First"})
            }
        
            const isPasswordCorrect = bcrypt.copareSync(req.body.password, user.password)
            if(!isPasswordCorrect){
            res.status(200).json({message: "Password is not correct"})
            }
            const { password, ...others } = user._doc
            res.status(200).json({ others })
    } catch (error) {
        res.status(200).json({ message: "User Aleready Exists..."})
    }
})

module.exports = router