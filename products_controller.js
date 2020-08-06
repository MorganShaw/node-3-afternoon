module.exports = {
    createProduct: (req, res, next) => {
        const db = req.app.get("db");
        db.create_product()
        .then(() => {
            res.sendStatus(200);  
        }).catch(err => {
            res.status(500).send({errorMessage: "Something went wrong!"});
            console.log(err)
        })
    },
    getOne: (req, res, next) => {
        const db = req.app.get("db");
        db.read_product()
        .then(product => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send({errorMessage: "Uh, oh! Something went wrong."})
            console.log(err)
        })
    },
    getAll: (req, res, next) => {
        const db = req.app.get("db");
        db.read_products()
        .then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send({errorMessage: "Uh, oh! Something went wrong."})
            console.log(err) 
        });
    },
    update: (req, res, next) => {
        const db = req.app.get("db");
        db.update_product()
        .then(() => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send({errorMessage: "Uh, oh! Something went wrong."})
            console.log(err)
        });
    },
    delete: (req, res, next) => {
        const db = req.app.get("db")
        db.delete_product()
        .then(() => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send({errorMessage: "Uh, oh! Something went wrong."})
        });
    }
};
