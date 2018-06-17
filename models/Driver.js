
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const driverSchema = new Schema({
  firstName: {type: String, default: "Angela"},
  lastName: {type: String, default: "Putin"},
  //truck_id: {type: Schema.Types.ObjectId , ref: 'Truck', default: "5b258bc24198eda382a6c23c"},
  birthday: {type: Date},
  image: String
});

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;
