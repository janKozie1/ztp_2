const { WithContainer } = require("./WithContainer");

class ChangeObserver extends WithContainer {
    constructor (container) { super (container) }

    async recordCreation(entityType, fn) {
        const value = await fn();
        
        if (value) {
            this.container.getService('change').record({
                entityType,
                entityId: value._id,
                date: new Date(),
                changeType: 'add',
            })
        }

        return value
    }

    async recordUpdate(entityType, input, fn) {
        const value = await fn();
        
        if (value) {
            const diff = Object.entries(input).map(([key, inputValue]) => value[key] !== inputValue 
                ? [key, {from: inputValue, to: value[key]}]
                : null
            ).filter(Boolean)

            if (diff.length !== 0) {
                this.container.getService('change').record({
                    entityType,
                    entityId: value._id,
                    date: new Date(),
                    changeType: 'edit',
                    changeBody: Object.fromEntries(diff)
                })
            }

        }

        return value
    }

    async recordDeletion(entityType, fn) {
        const value = await fn();
        
        if (value) {
            this.container.getService('change').record({
                entityType,
                entityId: value._id,
                date: new Date(),
                changeType: 'delete',
            })
        }

        return value
    }
}

module.exports = { ChangeObserver }