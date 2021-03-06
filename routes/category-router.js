const express = require('express');
const categoriesCtrl = require('../controllers/category-ctrl');
const router = express.Router();

router.post('/', categoriesCtrl.createCategory);
router.get('/', categoriesCtrl.getCategories);
router.put('/:id', categoriesCtrl.updateCategory);
router.delete('/:id', categoriesCtrl.deleteCategory);
router.get('/:id', categoriesCtrl.getCategorybyid);
module.exports = router;
