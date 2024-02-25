const mongoose = require('mongoose');
const { Schema } = mongoose;

const departmentSchema = new Schema(
    {
        name:{
            type: 'string',
            required: true,
        },


    },
 );

 const employeeSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
          },
          department: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Department',
            required: true
          }


    },
 );

 const Department = mongoose.model('Department', departmentSchema);
 const InfoEmployee = mongoose.model('InfoEmployee', employeeSchema);
 
 module.exports = { Department, InfoEmployee };