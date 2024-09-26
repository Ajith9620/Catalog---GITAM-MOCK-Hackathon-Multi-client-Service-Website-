const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
    const { service, date } = req.body;
    const booking = await Booking.create({ service, customer: req.user.id, date });
    res.status(201).json(booking);
};

exports.getBookings = async (req, res) => {
    const bookings = await Booking.find({ customer: req.user.id }).populate('service');
    res.json(bookings);
};
