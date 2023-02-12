const express = require('express')
const router = express.Router()
const {getreq,setHome,enterData} = require('./controllers.js')

router.route('/').get(setHome)
router.route('/roblox').get(getreq).post(enterData);

module.exports = router;