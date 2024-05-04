const exprss = require('express');
const router = exprss.Router();
const controller = require('./controller');

router.get('/applicants', controller.getApplicants);
router.post('/createapplicant', controller.addApplicant);
router.post('/updateapplicant', controller.updateApplicant);
router.post('/percentageUpdate', controller.percentageUpdate);
router.post('/deleteapplicant', controller.deleteApplicant);

module.exports = router;