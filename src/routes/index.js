const productRoutes = require('./ProductRoutes.js')
const changeRoutes = require('./ChangeRoutes.js')

const loadRoutes = (app, container) => {
    productRoutes.loadRoutes(app, container)
    changeRoutes.loadRoutes(app, container)
}

module.exports = {
    loadRoutes
}