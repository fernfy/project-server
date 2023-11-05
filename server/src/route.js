const UserController = require('./controllers/UserController')
const SchoolController = require('./controllers/SchoolController')

module.exports = (app) => {
    /* RESFUL Api dor users management */

    // get all user
    app.get('/users', UserController.index)

    // create user
    app.post('/user', UserController.create)

    // edit user, suspend, active
    app.put('/user/:userId', UserController.put)

    // delete user
    app.delete('/user/:userId', UserController.remove)

    // get user by id
    app.get('/user/:userId', UserController.show)

    app.get('/school', SchoolController.index)

    // create user
    app.post('/school', choolController.create)

    // edit user, suspend, active
    app.put('/school/:schoollId', SchoolController.put)

    // delete user
    app.delete('/school/:schoolId', SchoolController.remove)

    // get user by id
    app.get('/school/:schoolId', SchoolController.show)


}