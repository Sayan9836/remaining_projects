const router = require('express').Router();

const {

    User_register,
    User_login,
    Admin_login,
    Manager_login,
    Employee_login,
    Employee_register,
    Manager_register,

} = require('../controllers/UserController')

const authorize = require('../middlewares/Authorize');
const authenticate = require('../middlewares/Authenticate');


router.post('/user/register', User_register);
router.post('/user/login', User_login);
router.post('/admin/login', Admin_login);
router.post('/manager/login', Manager_login);
router.post('/employee/login', Employee_login);
router.post('/manager/register', Manager_register);
router.post('/employee/register', Employee_register);


router.get('/admin/dashboard', authenticate, authorize('admin'), (req, res) => {
    console.log("success", req);
})
router.get('/manager/dashboard', authenticate, authorize('manager'), (req, res) => {
    console.log("success", req);
})
router.get('/employee/dashboard', authenticate, authorize('employee'), (req, res) => {
    console.log("success", req);
})
router.get('/user/dashboard', authenticate, authorize('user'), (req, res) => {
    console.log("success", req);
})



module.exports = router



