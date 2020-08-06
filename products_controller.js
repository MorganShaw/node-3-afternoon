module.exports = {
    create: (req, res, next) => {
        const db = req.app.get("db");
        const {name, description, price, image_url} = req.body;

        db.create_product([name, description, price, image_url])
        .then(() => {
            res.sendStatus(200);  
        }).catch(err => {
            res.status(500).send({errorMessage: "Something went wrong!"});
            console.log(err)
        })
    },
    getOne: (req, res, next) => {
        const db = req.app.get("db");
        const {product_id} = req.params;
        db.read_product(product_id)
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
        const {params, query} = req;
        db.update_product([params.product_id, query.description])
        .then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send({errorMessage: "Uh, oh! Something went wrong."})
            console.log(err)
        });
    },
    delete: (req, res, next) => {
        const db = req.app.get("db")
        const {product_id} = req.params;
        db.delete_product(product_id)
        .then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send({errorMessage: "Uh, oh! Something went wrong."})
        });
    }
};
