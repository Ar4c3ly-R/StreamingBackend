import Movie from "../models/Movie.js";

const Query = {
    
    async getMovies(){
        const movies = await Movie.find()
        return movies
    },

    async findByTitleMovie(_, { title } ) {
        const movieName = await Movie.find({title})
        return await movieName

    // await Character.deleteMany({});
    // await Character.create({ name: 'Jean-Luc Picard' });

    // await Character.exists({ name: /picard/i }); // { _id: ... }
    // await Character.exists({ name: /riker/i }); // null
    },

    async login(_, { email, password } ) {
        const userVerif = await User.findOne( { email, password })
        console.log(userVerif)
        if ( userVerif ) {
        return userVerif
        } else
        throw new Error ('Invalid credential!!')
    }
    
}

export default Query