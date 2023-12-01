const { WithContainer } = require('../utils/WithContainer.js')

class ProductController extends WithContainer {
    constructor(container) { super(container) }

    index = async (req, res) => {
        try {
            const products = await this.container.getService('product').index();
            res.json(products);
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    details = async (req, res) => {
        try {
            const product = await this.container.getService('product').details(req.params.id);

            if (product === null) {
                res.status(404)
                res.json(null)
            } else {
                res.json(product);
            }
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    create = async (req, res) => {
        try {
            const product = await this.container.getService('product').create(req.body);
            res.json(product);
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    update = async (req, res) => {
        try {
            const product = await this.container.getService('product').update(req.params.id, req.body);

            if (product === null) {
                res.status(404)
                res.json(null)
            } else {
                res.json(product);
            }
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    delete = async (req, res) => {
        try {
            const deleted = await this.container.getService('product').delete(req.params.id);
            res.json(deleted);
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
}

module.exports = {
    ProductController,
}