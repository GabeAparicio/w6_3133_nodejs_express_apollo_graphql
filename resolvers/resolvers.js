import MovieModel from '../models/movie.js';

const movieResolvers = {
    Query: {
        // Get all movies
        getAllMovies: async () => {
            return await MovieModel.find();
        },

        // Get movie by ID
        getMovieById: async (_, { id }) => {
            return await MovieModel.findById(id);
        },

        // Get movies by director name (using static method later)
        getMoviesByDirector: async (_, { director_name }) => {
            return await MovieModel.findByDirector(director_name);
        }
    },

    Mutation: {
        // Insert new movie
        insertMovie: async (_, { movie }) => {
            return await MovieModel.create(movie);
        },

        // Update movie
        updateMovie: async (_, { id, movie }) => {
            return await MovieModel.findByIdAndUpdate(id, movie, {
                new: true,
                runValidators: true
            });
        },

        // Delete movie by ID
        deleteMovieById: async (_, { id }) => {
            const result = await MovieModel.findByIdAndDelete(id);
            return !!result;
        }
    }
};

export default movieResolvers;