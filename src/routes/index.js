const productRoutes = require('./ProductRoutes.js')

const loadRoutes = (app, container) => {
    productRoutes.loadRoutes(app, container)
}

module.exports = {
    loadRoutes
}