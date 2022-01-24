const { Router } = require('express');
const connectDB = require('../database/postgresql');
const router = Router();

router.get('/', async (rep, res) => {
    try{
        // var resultConnect= await connectDB.userDemo();
        // console.log("resultConnect: ",resultConnect);
        res.json({
            message: 'Hello Jhonny Lopez Yapu'
        })
    }catch(e){
      console.log(e.message);
    }
    

});


module.exports = router;