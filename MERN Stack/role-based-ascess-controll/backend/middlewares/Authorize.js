
function authorize(role) {

    return (req, res, next) => {

        const userRole = req.user.role;

        console.log(userRole, role);

        if (userRole.includes(role)) {
            next();
        } else {
            res.status(403).json({ message: 'Forbidden' });
        }
    }
}

module.exports = authorize;
