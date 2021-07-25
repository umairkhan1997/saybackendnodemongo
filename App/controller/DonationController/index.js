const donationTransactionSchema = require("../../model/DonationModel/index");
const { getAllData, saveNewData, updateSpecificData, findByKey } = require('../../helper/index');
const axios = require('axios');


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

            const objBank = {
                Registration: {
                    Currency: "AED",
                    ReturnPath: req.body.returnPath,
                    TransactionHint: "CPT:Y;VCC:Y;",
                    OrderlD: donate.tid,
                    Store: "0000",
                    Terminal: "0000",
                    Channel: "Web",
                    Amount: req.body.amount,
                    Customer: "Demo Merchant",
                    OrderName: req.body.ordername,
                    UserName: "Demo_fY9c",
                    Password: "Comtrust@20182018",
                },
            };
            const options = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": 'true',
                    "Access-Control-Allow-Headers": "*",
                },
                data: objBank,
                url: "https://demo-ipg.ctdev.comtrust.ae:2443",
            };

            axios(options)
                .then((ress) => {
                    // console.log(ress.data.Transaction, "response");
                    // console.log(ress, "resresresres");
                    return res.status(200).send({ status: 200, success: true, message: 'Donation is succesfully submitted .', donate, bankResponse: ress.data.Transaction })
                })
                .catch((err) => {
                    console.log(err);
                });

        }
    } catch (e) {
        return res.status({ status: 200, message: e.message });
    }
}

checkDonationResult = (req, res) => {
    console.log(req.body, 'req.dodyreq.dody')
    try {
        const obj = {
            "Finalization": {
                "TransactionID": req.body.donationDataTrans,
                "Customer": "Demo Merchant",
                "UserName": "Demo_fY9c",
                "Password": "Comtrust@20182018"
            }
        }
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            data: obj,
            url: "https://demo-ipg.ctdev.comtrust.ae:2443",
        };
        axios(options)
            .then(ress => {
                console.log(ress.data.Transaction, 'res')
                return res.status(200).send({ status: 200, success: true, message: 'Donation is succesfull', bankResponse: ress.data.Transaction })
                //  this.setState({ portalView: res.data })
            })
            .catch(err => {
                console.log(err, '2')
                return res.status(200).send({ status: 200, message: err.message })
            })
    } catch (e) {
        return res.status(200).send({ status: 200, message: e.message })
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
    getSortedDataDonation,
    checkDonationResult
};
