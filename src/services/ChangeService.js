const { ChangeModel } = require('../models/ChangeModel.js')
const { WithContainer } = require('../utils/WithContainer.js')

class ChangeService extends WithContainer {
    constructor(container) { super(container) }

    list = async (entityId) => {
        return ChangeModel.find({entityId})
    }

    record = async (data) => {
        return (new ChangeModel(data)).save()
    }
}

module.exports = {
    ChangeService
}