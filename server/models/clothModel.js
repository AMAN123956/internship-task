const mongoose =require('mongoose')


const ClothSchema = mongoose.Schema({
    pid: {
        type: String,
        required: true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type: Number,
        required:true,
    },
    img:
	{
		data: Buffer,
		contentType: String
	}
},{
    timestamps:true
})

/* Cloth Model Creaated */
const clothModel = mongoose.model("clothModel", ClothSchema)

/* Exporting Cloth Model */
module.exports = clothModel