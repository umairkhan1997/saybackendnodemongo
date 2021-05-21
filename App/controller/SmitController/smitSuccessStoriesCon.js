const smitSuccessStoriesSchema = require("../../model/SmitModel/smitSuccessStoriesModel");

smitSuccessStoriesAdd = async (req, res) => {
    const { name, designation, link, image } = req.body;

    try {
        const result = new smitSuccessStoriesSchema({ name, designation, link, image });
        await result.save();
        res.status(200).json({
            success: true,
            message: "Smit Success Stories Added",
        });
    } catch (err) {
        return res.status(422).json({ success: false, message: err.message });
    }
};

smitSuccessStoriesGet = async (req, res) => {
    const allVid = await smitSuccessStoriesSchema.find();
    res.status(200).json({
        success: true,
        data: allVid,
    });
};


module.exports = {
    smitSuccessStoriesAdd,
    smitSuccessStoriesGet
};
