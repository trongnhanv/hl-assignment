import { unTouchJokeState } from "features/Joke/recoil/jokeState";
import { useRecoilValue } from "recoil";

export default function Content() {
  const joke = useRecoilValue(unTouchJokeState);
  return (
    <div className="h-28">
      {joke ? (
        joke.content
      ) : (
        <div className="text-red-400 font-semibold text-center">
          That&apos;s all the jokes for today! Come back another day!
        </div>
      )}
    </div>
  );
}
