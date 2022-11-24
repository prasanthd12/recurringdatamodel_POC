module.exports = app => {
    const tutorials = require('../controllers/tutorial.controller.js');

    const router = require('express').Router();

    router.get('/:id', tutorials.findOne);

    app.use('/api/tutorials', router);
}