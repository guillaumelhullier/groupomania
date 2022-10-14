const mongoose = require ('mongoose');

//User Schema

const userSchema = new mongoose.Schema(
    {
        pseudo: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 55,
            unique: true,
            trim: true
        },
        email:{
            type : String,
            required: true,
            lowercase: true,
            trim: true,
        },
        password:{
            type: String,
            required: true,
            max: 1024,
            minLength:6
        },
        bio: {
            type: String,
            max : 1024
        },
        likes:{
            type: [String]
        }
    },
    {
        timestamps:true,
    }
)

const UserModel = mongoose.model('user' , userSchema);
module.exports = UserModel;