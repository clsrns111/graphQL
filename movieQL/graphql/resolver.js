import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating), // 어떤 사용자가 name을 요청하면 nicolas를 반환하는 함수
  },
};

export default resolvers;
