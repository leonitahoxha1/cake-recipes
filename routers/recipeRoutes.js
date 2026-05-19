const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
    getRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe
} = require('../controllers/recipeController');

router.get('/', getRecipes);
router.post('/', auth, createRecipe);
router.put('/:id', auth, updateRecipe);
router.delete('/:id', auth, deleteRecipe);

module.exports = router;