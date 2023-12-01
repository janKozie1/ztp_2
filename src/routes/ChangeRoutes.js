const loadRoutes = (app, container) => {
    const controller = container.getController('change');

    app.route('/changes/:id')
        .get(controller.list);
}

module.exports = {
    loadRoutes
}