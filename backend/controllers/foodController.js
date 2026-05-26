import foodModel from "../models/foodModels.js";
import fs from 'fs'

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

const addFood = async (req, res) => {

    try {
        let image_filename = `${req.file.filename}`

        const food = new foodModel({
            name: req.body.name,
            price: req.body.price,
            category:req.body.category,
            image: image_filename,
        })

        await food.save();
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)

        if (!food) {
            return res.json({ success: false, message: "Food not found" })
        }

        // delete image
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) console.log("Image delete error:", err)
        })

        // delete DB
        await foodModel.findByIdAndDelete(req.body.id)

        res.json({ success: true, message: "Food Removed" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

export {addFood,listFood,removeFood}