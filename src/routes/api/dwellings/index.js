const model = global.app.model;

module.exports = router => {
    router.get('/', (req, res, next) =>
        model.Dwelling.find({}, {}).lean().exec().then(
            dwellings => res.send({dwellings})
        ).catch(next)
    );

    router.post('/', (req, res, next) => {
        const dwelling = new model.Dwelling(req.body.dwelling);
        dwelling.save().then(
            () => res.send({success: true})
        ).catch(next);
    });


    return router;
};
