const express=require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
var fs = require('fs');
var path = require('path');
const multer = require('multer')
const ejs = require("ejs")
require('colors')
require('dotenv').config({path:'../dev.env'})
const connectDB =require('./db/db')
const cors=require('cors')
connectDB()
const app = express();


app.use(express.json())
app.use(cors())
app.use(express.static("public"));
// Step 4 - set up EJS

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Set EJS as templating engine
app.use("/app/views", express.static(__dirname + "/views"));

app.set("view engine", "ejs");


const PORT=process.env.PORT||5000

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}


const clothModel = require('./models/clothModel')
/*app.get("/", async (req, res) => {
    await clothModel.find({}, (err, items) => {
		if (err) {
			console.log(err);
			res.status(500).send('An error occurred', err);
		}
        else {
           
			res.render("index", { items: items });
		}
	});
})
*/
/* Cloth Data */

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads')
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now())
	}
});

var upload = multer({ storage: storage });
app.post('/save', upload.single('image'), (req, res, next) => {
	console.log("file" + req.file.filename);
	console.log(req.body)
	var obj = {
		pid:req.body.pid,
		name: req.body.name,
		description: req.body.description,
		price:req.body.price,
		img: {
			data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
			contentType: 'image/png'
		}
	}
	clothModel.create(obj, (err, item) => {
		if (err) {
			console.log(err);
		}
		else {
			item.save();
			res.send("saved")
		}
	});
});

// Routers to handle Api request
const userRoutes=require('./routes/userRoutes')
const clothRoutes = require('./routes/clothRoutes')

// APIs to handle user and cloth data
app.use('/api/users', userRoutes)
app.use('/api/cloth', clothRoutes)


app.listen(PORT,()=>{console.log(`Server listening on port ${PORT}`.yellow)})
