const express = require('express');

const { getAllServants, getServantById, addServant, getIllustrators, addIllustrator, updateServant, deleteServant } = require('../controllers');
const fgoValidation = require('../middleware/validation/fgo-validation');
const authorization = require('../middleware/auth');

const router = express.Router();

router.get('/servants', authorization, getAllServants);
router.get('/servant/:id', authorization, getServantById);
router.post('/addservant', fgoValidation, addServant);
router.get('/illustrators', authorization, getIllustrators);
router.post('/addillustrator', addIllustrator);
router.put('/servant/:id', authorization, updateServant);
router.delete('/servant/:id', authorization, deleteServant);

module.exports = router;