const mongoose=require("mongoose")
const dataschema=mongoose.Schema({
    fname:String,
    fid:String,
    ftitle:String,
    femail:String,
    basicSalary:String,
    allowance:Number,
    ot:Number,
    bonus:Number,
    deductionTax:Number,
    deductionOther:Number,
    other:Number,
})

const salarymodel=mongoose.model("salary",dataschema)




module.exports = salarymodel;