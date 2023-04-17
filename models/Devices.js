const mongoose = require('mongoose')
const AutoIncerement = require('mongoose-sequence')(mongoose)

const deviceSchema = new mongoose.Schema({
    key: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'ApiKey'
    },
    device: {
        type: String,
        required: true
    },
    connected: {
        type: boolean,
        required: true
    }
}, {
    timestamps: true
})

deviceSchema.plugin(AutoIncerement, {
    inc_field: 'device_ticket',
    id: deviceNums,
    start_seq: 500
})

module.exports = mongoose.model('Device', deviceSchema)