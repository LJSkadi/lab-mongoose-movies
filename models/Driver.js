
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const driverSchema = new Schema({
  firstName: String,
  lastName: String,
  truck_id: {type: Schema.Types.ObjectId, ref: 'Truck', default: null},
  birthday: Date, default: String,
  image: String
});

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;
