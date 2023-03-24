import { Schema, model} from "mongoose";

const movieSchema = new Schema( {
    title: {
        type:String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    likes: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    releasedate: {
        type: String
    }

})

export default model('Movie', movieSchema)