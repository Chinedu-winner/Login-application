const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
email: {
    type: String,
    required: true
},
password: {
    type: String,
    required: true
}
});

// Check if model already exists, otherwise create it
module.exports = mongoose.models.User || mongoose.model("User", UserSchema);