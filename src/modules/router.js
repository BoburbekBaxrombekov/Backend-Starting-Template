const { Router } = require('express')
const router = new Router()
const Modules = require('./module/module')
router
    .get('/user-tests/:id', Modules.GET)
    .post('/user-tests/add', Modules.POST)

module.exports = router