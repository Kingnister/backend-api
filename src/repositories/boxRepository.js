const mongoose = require('mongoose');
const Box = mongoose.model('Box'); 

module.exports = {
    async create(data) {
        const box = await Box.create(data);
        return box.save();
    },

    async show(data) {
        const box = await Box.find(data);
        return box;
    },

    async getById(id) {
        const box = await Box.findById(id)
        return box;
    }
}

