const express=require('express')
const router=express.Router()
const feed=require('../controllers/Feed.cjs')

router.post("/feedback",feed.usersFeed)


module.exports=router