const model = global.app.model;
const {hash} = global.app.security;

module.exports = router => {

    router.post('/', (req, res, next) => {
        const user = new model.User(req.body.user);
        user.password = hash('123456');
        user.save().then(
            () => res.send({success: true})
        ).catch(next);
    });


    return router;
};
