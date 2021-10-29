import User from "../model/userSchema.js";

export const userSignup = async (req, res) => {
    try {
        const exist = await User.findOne({ username: req.body.username })
        if (exist) {
            return res.status(401).json('username already exists')
        }
        const user = req.body
        const newUser = new User(user)
        await newUser.save()

        res.status(200).json('user is succefully registered')
    } catch (err) {
        console.log(err);
    }
    return "Hello from signup"
}

export const userLogin = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username, password: req.body.password })
        if (user) {
            return res.status(200).json(`${req.body.username} Logged in Successfully`)
        } else {
            return res.status(401).json(`${req.body.username} does not exist`)
        }
    } catch (err) {
        console.log(err.message);
    }
    return "Hello from signup"
}