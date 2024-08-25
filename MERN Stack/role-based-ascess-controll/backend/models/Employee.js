const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Employee name is required'],
    },

    fatherName: {
        type: String
    },

    motherName: {
        type: String
    },

    password: {
        type: String,
        required: [true, 'password is required']
    },

    designation: {
        type: String,
    },

    roles: {
        type: String,
        enum: ['employee', 'manager', 'admin'],
        required: [true, 'role is required']
    }


})

module.exports = mongoose.model('Employee', employeeSchema);