let Cat =require('./model');
let express =require( 'express');
const router = express.Router();

let bodyParser =require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.post('/add',(req,res)=>{
    const cat = new Cat(req.body);
    cat.save(function (err,data) {
        if (err){
            console.log('err');
        }
        res.status(200).send(data);
    });
});

module.exports=router;