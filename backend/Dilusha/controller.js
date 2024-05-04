const { response } = require('./app');
const Applicant = require('./model');

const getApplicants = (req, res, next) => {
    Applicant.find()
        .then(response => {
            res.send({ response })
        })
        .catch(error => {
            res.json({ error })
        });
};

const addApplicant = (req, res, next) => {
    const { id, name, job_title, email, contact_number, age, education_qualification, work_experience } = req.body;

    // Validate required fields
    if (!id || !name || !job_title || !email || !contact_number || !age || !education_qualification || !work_experience) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const applicant = new Applicant({
        id: id,
        name: name,
        job_title: job_title,
        email: email,
        contact_number: contact_number,
        age: age,
        education_qualification: education_qualification,
        work_experience: work_experience,
        percentage: "0"
    });

    applicant.save()
        .then(response => {
            res.send({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

const percentageUpdate = (req, res, next) => {
    const promises = req.body.map(element => {
        const ID = element.id;
        const percentage = element.percentage;

        return Applicant.updateMany({ id: ID }, { $set: { percentage: percentage } });
    });

    Promise.all(promises)
        .then(response => {
            res.send({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

const updateApplicant = (req, res, next) => {
    const { id, name, job_title, email, contact_number, age, education_qualification, work_experience } = req.body;

    // Validate required fields
    if (!id || !name || !job_title || !email || !contact_number || !age || !education_qualification || !work_experience) {
        return res.status(400).json({ error: "All fields are required." });
    }

    Applicant.updateMany({ id: id }, { $set: { name: name, job_title: job_title, email: email, contact_number: contact_number, age: age, education_qualification: education_qualification, work_experience: work_experience } })
        .then(response => {
            res.send({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

const deleteApplicant = (req, res, next) => {
    const id = req.body.id;

    // Validate required fields
    if (!id) {
        return res.status(400).json({ error: "ID is required." });
    }

    Applicant.deleteMany({ id: id })
        .then(response => {
            res.send({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

exports.getApplicants = getApplicants;
exports.addApplicant = addApplicant;
exports.updateApplicant = updateApplicant;
exports.deleteApplicant = deleteApplicant;
exports.percentageUpdate = percentageUpdate;