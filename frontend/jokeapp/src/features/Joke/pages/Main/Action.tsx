import {
  dislikeJokesListState,
  likeJokesListState,
  unTouchJokeState,
} from 'features/Joke/recoil/jokeState';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export default function Action() {
  const unTouchJoke = useRecoilValue(unTouchJokeState);
  const setLikeJoke = useSetRecoilState(likeJokesListState);
  const setDislikeJoke = useSetRecoilState(dislikeJokesListState);

  return (
    <div className="flex justify-center">
      <button
        className="w-60 bg-blue-500 hover:bg-blue-700 
          text-white py-2 px-4 border border-blue-500 
          hover:border-blue-700 rounded"
        onClick={() => {
          unTouchJoke && setLikeJoke(unTouchJoke.id);
        }}
      >
        This is Funny!
      </button>
      <div className="w-5"></div>
      <button
        className="w-60 bg-green-500 hover:bg-green-700 
          text-white py-2 px-4 border border-green-500 
          hover:border-green-700 rounded"
        onClick={() => {
          unTouchJoke && setDislikeJoke(unTouchJoke.id);
        }}
      >
        This is not funny.
      </button>
    </div>
  );
}
