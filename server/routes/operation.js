const express = require('express');
const router = express.Router();
const { createOperation, getAllOperations, getLastOperationsByNumber, getAllOperationsByPage } = require('../controllers/operation');

// Get all operations
router.get('/', getAllOperations);
// Create operation
router.post('/', createOperation);
// Get last operations
router.get('/operations/:numberOfOperations', getLastOperationsByNumber);
// Get operations with pagination
router.get('/page', getAllOperationsByPage);


module.exports = router;