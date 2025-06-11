const Show = require("../model/showModel");

// POST
const addShow = async (req, res) => {
    try {
        const newShow = new Show(req.body);
        await newShow.save();
        res.send({
            success: true,
            message: "Show added successfully",
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Failed to add show",
        });
    }
}

// PUT
const updateShow = async (req, res) => {
    try {
        await Show.findByIdAndUpdate(req.body.showId, req.body);
        res.send({
            success: true,
            message: "Show updated successfully",
        });

    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error from theatre controller" + err.message,
        });
    }
}

// DELETE
const deleteShow = async (req, res) => {
    try {
        await Show.findByIdAndDelete(req.body.showId);
        res.send({
            success: true,
            message: "Show deleted successfully",
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error from theatre controller" + err.message,
        });
    }

}

// GET
const getShowsByTheathres = async (req, res) => {
    try {
        const shows = await Show.find({ theatre: req.body.theatreId }).populate(
            "movie"
        );
        res.send({
            success: true,
            data: shows,
            message: "All shows by theatre",
        });
    } catch (err) {
        console.log(err);
        res.send({
            success: false,
            message: "Failed to get all shows by theatre",
        });
    }
}

const getAllTheathresByMovie = async (req, res) => {



    try {


    } catch (err) {
        console.log(err);
        res.send({
            success: false,
            message: "Failed to get all theatres by movie",
        });
    }
}

const getShowById = async (req, res) => {
    try {
        const show = await Show.findById(req.body.showId)
            .populate("movie")
            .populate("theatre");
        res.send({
            success: true,
            data: show,
            message: "Show by id",
        });
    } catch (err) {
        console.log(err);
        res.send({
            success: false,
            message: "Failed to get show by id",
        });
    }
}




module.exports = { addShow, updateShow, deleteShow, getShowsByTheathres, getAllTheathresByMovie, getShowById };




