const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
car_name:  {
    type: String,
    required: true
},
car_type:  {
    type: String,
    required: true
},
car_price: {
    type: Number,
    min: 1000,max:90000,
    required: true
}
})
module.exports = mongoose.model("car",carSchema)