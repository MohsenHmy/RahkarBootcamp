const Book = require("../models/book")
exports.addBook = async (req, res) => {
    console.log(req);
    try {
        let data = await Book.create({
            name: req.body.name,
            price: req.body.price,
            userId: req.body.userId


        });
        // let data=await User.findAll()
        console.log(data);
        res.json(data, 200);
    } catch (error) {
        res.json({ message: error }, 400);
    }
}
