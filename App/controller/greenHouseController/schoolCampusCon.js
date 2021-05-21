const schoolCampusSchema = require("../../model/greenhouseModel/schoolCampus");
const checkField = require("../../FieldValidation/checkField");

schoolCampusAdd = async (req, res) => {
    const { name, address, geoLocation } = req.body;

    if (!name) {
        return res.status(400).json(checkField("School Name"));
    } else if (!address) {
        return res.status(400).json(checkField("School Address"));
    }
    else if (!geoLocation) {
        return res.status(400).json(checkField("School GeoLocation"));
    } else {
        try {
            const result = new schoolCampusSchema({
                name, address, geoLocation
            });
            await result.save();
            res.send({ message: "School Campus Added" });
        } catch (err) {
            return res.status(422).send(err + "err");
        }
    }
};

schoolCampusGet = async (req, res) => {
    const result = await schoolCampusSchema.find();
    res.status(200).json({
        success: true,
        data: result,
    });
};


module.exports = {
    schoolCampusAdd,
    schoolCampusGet,

};
