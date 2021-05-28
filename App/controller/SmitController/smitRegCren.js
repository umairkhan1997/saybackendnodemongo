const { findByKey, saveNewData, getSpecificData } = require('../../helper/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


authUserSignUp = async (req, res) => {
    const { email, pass, userName, city } = req.body;
    // console.log(req.body, 'reqqqqqqqqq')
    try {
        const checkUser = await getSpecificData('authMassItAdmin', 'email', email);
        //   console.log(checkUser, 'checkUsercheckUser')
        if (checkUser) {
            return res
                .status(401)
                .send({ success: false, message: "Email Already Registered", });
        }
        else {
            const hashedPassword = await bcrypt.hash(pass, 12);
            const userSignUp = await saveNewData("authMassItAdmin", { email: email, pass: hashedPassword, userName, city });
            if (userSignUp) {
                const token = jwt.sign(pass, process.env.APP_KEY);
                return res.status(200).send({ status: 200, success: true, message: 'User succesfully created .', userSignUp, token })
            }
        }
    }
    catch (e) {
        return res
            .status(401)
            .send({ success: false, message: e.message });
    }
}

authUserLogin = async (req, res) => {
    const { email, pass, userName, city } = req.body;
    const checkUser = await getSpecificData('authMassItAdmin', 'email', email);
    if (checkUser) {
        //  console.log(checkUser, 'checkUse')
        const password_match = await bcrypt.compare(pass, checkUser.pass);
        //   console.log(password_match, 'password_match')
        if (password_match) {
            const token = jwt.sign(pass, process.env.APP_KEY);
            const result = await findByKey('authMassItAdmin', 'email', email);
            return res.status(200).send({
                status: 200,
                message: "login sucessfull",
                success: true,
                token,
                result
            });
        } else {
            return res
                .status(200)
                .send({ success: false, message: "Incorrect Password" });
        }
    }
    else {
        return res
            .status(200)
            .send({ success: false, message: "Email Not Found", });
    }

}


module.exports = {
    authUserSignUp,
    authUserLogin
};
