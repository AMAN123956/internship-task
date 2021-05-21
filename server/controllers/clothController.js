const clothModel = require('../models/clothModel')
const generateToken = require('../utils/generateToken')
const upload = require('../middleware/clothImgMiddleware')


// Get all cloth
const getCloth = async (req, res) => {
    try{
        const result = await clothModel.find({})
        console.log(result)
        if (result !== "") {
            res.status(201).json({
                data:result,
            })
        }
        else {
            res.json({
               result:"no products",
            })
        }
        
    }catch(e){
        console.log(e)
        res.json({error:e})
    }
}


// Update Cloth Data 
const updateCloth = async (req, res)=>{
    console.log(req.body.pid);
    console.log("Hiiiiiiiiiiiiii")
    try {
        const cloth = await clothModel.find({ pid: req.body.pid })
        if (cloth) {
            console.log(cloth);
            cloth[0].name = req.body.name || cloth[0].name
            cloth[0].pid = req.body.pid || cloth[0].pid
            cloth[0].price = req.body.price || cloth[0].price
            cloth[0].description = req.body.description || cloth[0].description
            const updatedCloth=await clothModel.create(cloth[0])
            res.status(200).json({
                remarks: "good",
                result: updatedCloth
            })
        }
      
    }catch(e){
        console.log(e)
        res.json()
    }
}

const deleteCloth = async (req,res)=>{
    console.log("Hiiiiiiiiiiiiii")
    try {
        const cloth = await clothModel.deleteOne({ pid: req.body.pid })
        if (cloth) {
            res.status(201).json({
                result: cloth
            })
        }
      
    }catch(e){
        console.log(e)
        res.json()
    }
}



module.exports={getCloth,updateCloth,deleteCloth}