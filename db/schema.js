const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const IdeaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
})

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    ideas: [IdeaSchema]

})

const IdeaModel = mongoose.model('Idea', IdeaSchema)
const UserModel = mongoose.model('User', UserSchema)


module.exports = {
    UserModel: UserModel,
    IdeaModel: IdeaModel
}