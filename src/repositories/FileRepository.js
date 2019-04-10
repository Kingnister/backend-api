const mongoose = require('mongoose');
const File = mongoose.model('File');

module.exports = {
    async store(data) {
        const file = await File.create(data)
        return file.save();
    }
}