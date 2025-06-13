const router = require("express").Router();
const Booking = require("../model/bookingModel");
const Show = require("../model/showModel");


router.post("/make-payment", auth, async (req, res) => { });


router.post("/book-show", auth, async (req, res) => { });


router.get("/get-all-bookings", auth, async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.body.userId })

    } catch (err) {
        res.send({
            success: false,
            message: err.message,
        });
    }

});

module.exports = router;