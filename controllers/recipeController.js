const db = require('../config/db');

exports.getRecipes = (req, res) => {
    db.query('SELECT * FROM recipes', (err, result) => {
        if(err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.createRecipe = (req, res) => {
    const { title, description, ingredients, steps, image } = req.body;

    db.query(
        'INSERT INTO recipes(title,description,ingredients,steps,image,createdBy) VALUES(?,?,?,?,?,?)',
        [title, description, ingredients, steps, image, req.user.id],
        (err, result) => {
            if(err) return res.status(500).json(err);
            res.json({ message: 'Recipe created' });
        }
    );
};

exports.updateRecipe = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    db.query(
        'UPDATE recipes SET title=?, description=? WHERE id=?',
        [title, description, id],
        (err, result) => {
            if(err) return res.status(500).json(err);
            res.json({ message: 'Recipe updated' });
        }
    );
};

exports.deleteRecipe = (req, res) => {
    const { id } = req.params;

    db.query(
        'DELETE FROM recipes WHERE id=?',
        [id],
        (err, result) => {
            if(err) return res.status(500).json(err);
            res.json({ message: 'Recipe deleted' });
        }
    );
};