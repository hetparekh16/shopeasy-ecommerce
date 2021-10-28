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