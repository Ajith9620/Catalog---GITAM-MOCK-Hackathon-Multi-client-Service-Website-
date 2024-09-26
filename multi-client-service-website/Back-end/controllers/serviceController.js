const Service = require('../models/Service');

exports.createService = async (req, res) => {
    const { title, description, price } = req.body;
    const service = await Service.create({ title, description, price, provider: req.user.id });
    res.status(201).json(service);
};

exports.getServices = async (req, res) => {
    const services = await Service.find().populate('provider', 'name');
    res.json(services);
};

exports.getServiceById = async (req, res) => {
    const service = await Service.findById(req.params.id).populate('provider', 'name');
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json(service);
};
