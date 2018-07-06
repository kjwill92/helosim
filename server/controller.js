module.exports = {
    postRegister: (req, res) => {
        const {username, password, profile_pic} = req.body;
        req.app.get('db').create_user([username, password, profile_pic]).then(user => res.status(201).send(user))
    },
    postLogin: (req, res) => {
        const {username, password} = req.body;
        req.app.get('db').login_user([username, password]).then(user => res.status(201).send(user))
    }
}