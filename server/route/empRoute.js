const express = require('express');
const {
  saveEmployee,
  getEmployees,
  updateEmployee,
  deleteEmp,
} = require('../controllers/empControllers');
const router = express.Router();

router.post('/saveEmp', saveEmployee);
router.get('/getEmp', getEmployees);
router.patch('/updateEmp/:id', updateEmployee);
router.delete('/deleteEmp/:id', deleteEmp);

module.exports = router;
