const usermodal = require('../modals/userModal')

const registerUser = async (req, res) => {
    try {
        const { name, email, password, cpassword } = req.body;

        if (!email || !name || !password || !cpassword) {
            return res.status(400).send({
                success: false,
                message: "Please fill all Fields....."
            })
        }

        if (password !== cpassword) {
            return res.status(400).send({
                success: false,
                message: "Password and Confirm Password does not matched..."
            })
        }

        const duplicate = await usermodal.findOne({ email: email });

        if(duplicate){
            return res.status(400).send({
                success: false,
                message: "User Already Exist..."
            })
        }

        const user = await usermodal.create({
            name: name,
            email: email,
            password: password,
        })

        return res.status(200).send({
            success: true,
            message: "User Register Successfully..",
            user: user
        })

    } catch (err) {
        return res.status(401).send({
            success: false,
            err: err,
        })
    }
}

module.exports = {
    registerUser
}