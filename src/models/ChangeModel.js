const mongoose = require('mongoose')

const ChangeSchema = new mongoose.Schema({
  entityType: {
    type: String,
    required: 'Entity type is required'
  },
  date: {
    type: Date,
    required: 'Change date is required',
  },
  entityId: {
    type: String,
    required: 'EntityId is required'
  },
  changeType: {
    type: String,
    required: 'Change type is required'
  },
  changeBody: {
    type: Object
  }

}, {
  strict: false,
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, resultObject, options) {
      delete resultObject._id
      delete resultObject.__v
      return resultObject
    }
  }
})

const ChangeModel = mongoose.model('Change', ChangeSchema, 'changes')

module.exports = {
    ChangeModel,
}