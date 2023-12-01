const { WithContainer } = require('../utils/WithContainer.js')

class ChangeController extends WithContainer {
    constructor(container) { super(container) }

    list = async (req, res) => {
        try {
            const changes = await this.container.getService('change').list(req.params.id);
            res.json(changes);
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
}

module.exports = {
    ChangeController,
}