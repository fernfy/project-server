const { school } = require('../models')

module.exports = {

    // Get all users
    async index(req, res) {
        try {
            const school = await school.findAll()
            res.send(school)
        } catch (err) {
            res.status(500).send({
                error: 'The users inforgmation was incorrect'
            })
        }
    },
    // Create user
    // res.send('ทำการสร้างผู้ใช้งาน' + JSON.stringify(req.body));
    async create(req, res) {
        try {
            const school = await school.create(req.body)
            res.send(school.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create user incorrect'
            })
        }
    },

    // Edit user
    // res.send('แก้ไขข้อมูลผู้ใช้ ' + req.params.userId + ' : ' + JSON.stringify(req.body.name));
    async put(req, res) {
        try {
            await school.update(req.body, {
                where: {
                    id: req.params.schoolId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update user incorrect'
            })
        }
    },

    // Delete user
    // res.send('ทำการลบผู้ใช้งาน:' + req.params.userId + ' : ' + JSON.stringify(req.body));
    // delete user
    async remove(req, res) {
        try {
            const school = await school.findOne({
                where: {
                    id: req.params.schoolId
                }
            });
            if (!school) {
                return res.status(403).send({
                    error: 'The school information was incorrect'
                });
            }
            await school.destroy();
            res.send(school);
        } catch (err) {
            res.status(500).send({
                error: 'The school information was incorrect'
            });
        }
    },

    // Show user by id
    async show(req, res) {
        try {
            const school = await school.findByPk(req.params.schoolId)
            res.send(school)
        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
    }
}


