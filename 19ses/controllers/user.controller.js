const User = require("../models/user")
exports.addUser = async (req, res) => {
    let mobileChecker = /^09[0|1|2|3][0-9]{8}$/
    let mobile = req.body.mobile

    if(mobile.match(mobileChecker)){
        console.log(req);
        try {
            let data = await User.create({
                fullName: req.body.fullName,
                mobile: req.body.mobile,
    
    
            });
            // let data=await User.findAll()
            console.log(data);
            res.json(data, 200);
        } catch (error) {
            res.json({ message: error }, 400);
        }
    }
    else{
        res.json("invalid number")
    }
}
