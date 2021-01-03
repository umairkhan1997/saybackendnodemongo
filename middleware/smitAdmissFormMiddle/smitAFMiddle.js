const autoIncrement = require('mongoose-auto-increment');
const SmitAdmissFormModel = require("../../model/SmitModel/SmitAdmissForm");

// startIdPass = (req, res, next) => {
//     const { id } = req.body
//     SmitAdmissFormModel.plugin(autoIncrement.plugin, {
//         model: 'user',
//         field: '_id',
//         startAt: id,
//         incrementBy: 1
//     });
// };

// module.exports = { startIdPass }


module.exports = (req, res, next) => {
    const { id } = req.body
    SmitAdmissFormModel.plugin(autoIncrement.plugin, {
        model: 'user',
        field: '_id',
        startAt: id,
        incrementBy: 1
    });
    next();
};
