module.exports = app => {
    const users = require('../controllers/tutorial.controller.js');

    const router = require('express').Router();

    router.get('/:id', users.findOne);
    router.get('/',users.findAll);

    app.use('/api/users', router);
}