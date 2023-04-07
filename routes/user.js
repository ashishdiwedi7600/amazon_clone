const router = require('express').Router();
const userController = require('../controller/user');
const dbController = require('../controller/dbBackupController');
const { validateSignup,userLogin,verification} = require('../validations/userValidate');
const { validateErrors ,varifyUser} = require('../middleware/global-middlewares');

(()=>{

    getRequest()

    postRequest()

    patchRequest()

    deleteRequest()

})();




function getRequest(){
    router.get('/',userController.getuser )
    router.get('/products',userController.getproducts )
 
}


function postRequest(){
    router.post('/signup', validateSignup(),validateErrors,userController.signUser)
    router.post('/login', userLogin(), validateErrors, userController.userLogin) // Generate Token
    router.post('/addtocart',  varifyUser , validateErrors) // 2 layer security
    router.patch('/verification',userController.verification) 
    router.post('/dbdump',dbController.dbdump) 
    
}


function patchRequest(){
    
}

function deleteRequest(){
    
}

module.exports = router