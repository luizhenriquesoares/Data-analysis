const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        maxlength: [10,"Username muito grande"],
        minlength: [2, "Username muito pequeno"]
    },
    password: {
        type: String,
        minlength: [3, "seu password é muito curto"],
    },
    email: {
        type: String,
        required: "O campo é obrigatório"
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
