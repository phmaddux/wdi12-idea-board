const express = require('express')
const router = express.Router()
const { UserModel } = require ('../db/Schema')

router.get('/', async (req, res) => {
   try {
    const users = await UserModel.find({})
    res.json(users)
   } catch (err) {
       console.log(err)
   }
})

module.exports = router