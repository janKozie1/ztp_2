const validation = require('../validation/ProductValidation');
const { handleValidation } = require('../middleware/validation');

const loadRoutes = (app, container) => {
    const controller = container.getController('product');

    app.route('/products')
        .get(controller.index);

    app.route('/products/create')
        .post(validation.create, handleValidation, controller.create);

    app.route('/products/:id')
        .get(controller.details)
        .put(validation.update, handleValidation, controller.update)
        .delete(controller.delete)
}

module.exports = {
    loadRoutes
}