const mongoose = require('mongoose');
const schema = mongoose.Schema;

const applicantSchema = new schema({
    id: Number,
    name: String,
    job_title: String,
    email: String,
    contact_number: String,
    age: Number,
    education_qualification: String,
    work_experience: String,
    percentage: Number,
})

const Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;