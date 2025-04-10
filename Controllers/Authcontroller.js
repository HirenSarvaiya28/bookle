const usermodal = require('../modals/userModal')

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Please provide email and password"
            })
        }

        const user = await usermodal.findOne({ email: email });

        if (!user || user.password !== password) {
            return res.status(401).send({
                success: false,
                message: "Your email or password is incorrect"
            })
        }
        return res.status(200).send({
            success: true,
            message: "Login successfully....",
            token: token
        })
    } catch (err) {
        return res.status(400).send({
            success: false,
            error: err
        })
    }
}

module.exports = {
    loginUser
}