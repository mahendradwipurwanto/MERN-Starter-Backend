const mongoose = require('mongoose')
const AutoIncerement = require('mongoose-sequence')(mongoose)

const apiKeySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    api_key: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

apiKeySchema.plugin(AutoIncerement, {
    inc_field: 'apiKey_ticket',
    id: apiKeyNums,
    start_seq: 500
})

module.exports = mongoose.model('ApiKey', apiKeySchema)