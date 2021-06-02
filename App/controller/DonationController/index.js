const donationTransactionSchema = require("../../model/DonationModel/index");
const { getAllData, saveNewData, updateSpecificData, findByKey } = require('../../helper/index');



donationDataGet = async (req, res) => {
    // console.log('hello world')
    try {
        const result = await getAllData('donation')
        // console.log(result)
        return res.status(200).send({ status: 200, success: true, message: 'The data is fetch successfully .', result })
    } catch (e) {
        return res.status(200).send({ status: 200, message: e.message })
    }
};



donationAdd = async (req, res) => {
    try {
        const donate = await saveNewData("donation", req.body);
        if (donate) {
            return res.status(200).send({ status: 200, success: true, message: 'Donation is succesfully submitted .', donate })
        }
    } catch (e) {
        return res.status({ status: 400, message: e.message });
    }
}


specificdonationUpdate = async (req, res) => {
    const { orderId, tstatus, approvalcode, cardno, bankTranId } = req.body
    let searchQuery = { "tid": orderId }
    let updateQuery = {
        "tstatus": tstatus, "approvalcode": approvalcode,
        "cardno": cardno, "bankTranId": bankTranId
    }

    try {
        await updateSpecificData('donation', searchQuery, updateQuery)
        return res.status(200).send({ status: 200, success: 'Donation successfully Updated.' })
    } catch (e) {
        res.status(200).send({ status: 200, message: e.message })
    }
}


getSpecificDataDonation = async (req, res) => {
    const { status } = req.body;
    const result = await donationTransactionSchema.find({ date: req.body.date, 'tstatus': status }).sort({ date: 1 }).skip(0).limit(100000);
    return res.status(200).send({ status: 200, success: 'Donation successfully Fetch.', result })
}


getSortedDataDonation = async (req, res) => {
    console.log("getSortedDataDonation");
    let { startDate, endDate, status } = req.body;
    try {

        const transactions = await donationTransactionSchema.find({
            dateTransaction: {
                $gte: new Date(new Date(startDate).setHours(00, 00, 00)),
                $lt: new Date(new Date(endDate).setHours(23, 59, 59))
            }, 'tstatus': status
        }).sort({ dateTransaction: 1 })
        return res.status(200).send({ status: 200, success: 'Donation successfully Fetch.', data: transactions })
    }
    catch (e) {
        return res.status(200).send({ status: 200, success: 'Donation not found.', message: e.message })
    }
}


module.exports = {
    donationAdd,
    donationDataGet,
    specificdonationUpdate,
    getSpecificDataDonation,
    getSortedDataDonation
};
