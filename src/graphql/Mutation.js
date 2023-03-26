import Movie from "../models/Movie.js"

const Mutation = {

    async createMovie( _, { title, description, likes, image, releasedate }) {
        const newMovie = { title, description, likes, image, releasedate }
        const movie = await Movie.create(newMovie)

        return await Movie.find()
    },

    async updateMovie( _, { title, description, likes, image, releasedate }) {

        return await Movie.findByIdAndUpdate(_id, {title, description, likes, image, releasedate }, {new: true})
    },

    async deleteMovie( _, { _id}) {
        const movieDeleted = await Movie.findByIdAndDelete(_id)

        return await Movie.find()
    },

    async createUser( _, { name, email, password }) {
        const newUser = { name, email, password }
        const user = await User.create( newUser )

        return await User.find()
    }

}

export default Mutation
