const Feed=require('../models/Feedback.cjs')

const usersFeed= async(req,res)=>{
  try{
    const {name,no,feedback}=req.body
    const data={
        name:name,
        no:no,
        feedback:feedback
    }

     await Feed.insertMany([data])
   res.json("Posted")
}
catch(e){
  res.json('error')
}
}

module.exports={usersFeed}