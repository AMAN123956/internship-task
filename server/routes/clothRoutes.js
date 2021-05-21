const router = require('express').Router()
const clothModel = require("../models/clothModel")
const { getCloth,updateCloth, deleteCloth } = require('../controllers/clothController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getCloth).put(protect,updateCloth).delete(protect,deleteCloth)

/*const upload=multer({
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png|img)$/)){
            return cb(new Error('File needs to be a image'))
        }
        cb(undefined,true)
    }
})
router.post('/save',upload.single('avatar'),async (req,res)=>{
    try{
        console.log(req.file)
        const buffer=await sharp(req.file.buffer).resize({width:250,height:250}).png().toBuffer()
        const obj = {
			pid:req.body.pid,
			name: req.body.name,
			description: req.body.description,
			price: req.body.price,
			avatar: buffer
		}
		const result = await clothModel.create(obj)
        res.status(201).json({
			data:result,
		})
    }catch(e){
        console.log('Error',e)
        res.send({error:e})
    }
    },(error,req,res,next)=>{
    res.status(400).send({error:error.message})
})
*/

module.exports=router
