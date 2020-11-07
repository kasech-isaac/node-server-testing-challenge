const express = require("express")
const db = require("../country/country-model")

const router = express.Router()

router.post("/", async (req, res, next)=>{
    try{
const contrys= await db.create(req.body)
res.status(201).json(contrys)

    }catch(err){
        next(err)
    }
})

router.delete("/:id", async (req, res, next)=>{
    try{
const deleted= await db.remove(req.params.id)
res.status(200).json(deleted)


    }catch(err){
        next(err)
    }
})

module.exports = router