const Models = require('../model/index');

const getSpecificData = async (modelDb, key, value) => await Models[modelDb].findOne({
    [key]: value
}).exec()

const findByKey = async (modelDb, key, value) => await Models[modelDb].find({
    [key]: value
}).exec()

const pushSpecificData = async (modelDb, updateQuery, setQuery) => await Models[modelDb].update(updateQuery, { "$push": setQuery })

const updateSpecificData = async (modelDb, updateQuery, setQuery) => await Models[modelDb].update(updateQuery, { "$set": setQuery })

const removeDataFromArr = async (modelDb, updateQuery, unsetQuery) => await Models[modelDb].update(updateQuery, { "$unset": unsetQuery })


const getAllData = async (modelDb) => await Models[modelDb].find({})

const saveNewData = async (modelDb, storeObj) => {

    let data = new Models[modelDb](storeObj)
    return await data.save()
}


const getPopulatedData = async (modelDb, searchQuery, populateQuery, selectQuery) => await Models[modelDb]
    .find(searchQuery)
    .populate({ path: populateQuery, select: selectQuery })

const getAggregate = async (modelDb, aggregateQuery) => await Models[modelDb].aggregate(aggregateQuery)

const deleteSpecificData = async (modelDb, deleteQuery) => await Models[modelDb].deleteOne(deleteQuery)


module.exports = {
    getSpecificData,
    updateSpecificData,
    saveNewData,
    getAllData,
    getPopulatedData,
    removeDataFromArr,
    getAggregate,
    findByKey,
    deleteSpecificData,
    pushSpecificData,
}