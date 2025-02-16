const {Schema} = require("mongoose");

const HoldingsSchema = new Schema ({
    name: String, 
    avg : Number,
    qty : Number,
    price : Number, 
    net : String, 
    day : String,
});

module.exports = { HoldingsSchema };