const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status: { type: String, required: true },
    
}, { timestamps: true })


const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;