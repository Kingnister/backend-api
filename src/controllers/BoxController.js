const Box = require('../models/Box')

class BoxController {
    async store(req, res) {
        try {
            const box = await Box.create(req.body)
            return res.status(201).json(box)
        } catch (error) {
            res.status(500).send({
                message: 'Falha ao consultar clientes ' + error
            });
        }
    }

    async show(req, res) {
        try {
            const box = await Box.findById(req.params.id).populate({
                path: 'files',
                options: { sort: { createdAt: -1 } }
            })
            return res.status(201).json(box);
        } catch (error) {
            res.status(500).send({
                message: 'Falha ao executar requisição ' + error
            });
        }
    }
}

module.exports = new BoxController();