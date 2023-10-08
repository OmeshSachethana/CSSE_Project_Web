const express = require('express');
const router = express.Router();
const {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} = require('../controllers/supplierController');

router.get('/', getAllSuppliers);
router.get('/:id', getSupplierById);
router.post('/', createSupplier);
router.put('/:id', updateSupplier);
router.delete('/:id', deleteSupplier);

module.exports = router;
