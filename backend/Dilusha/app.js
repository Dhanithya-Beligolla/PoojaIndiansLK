const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/applicants', (req, res) => {
    controller.getApplicants(req, res, next => {
        res.send();
    })
})

app.post('/createapplicant', (req, res) => {
    controller.addApplicant(req.body, (callack) => {
        res.send();
    });
});

app.post('/updateapplicant', (req, res) => {
    controller.updateApplicant(req.body, (callack) => {
        res.send(callack);
    });
});

app.post('/deleteapplicant', (req, res) => {
    controller.deleteApplicant(req.body, (callack) => {
        res.send(callack);
    });
});

module.exports = app;
