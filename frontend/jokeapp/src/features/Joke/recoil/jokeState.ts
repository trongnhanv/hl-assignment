import { atom, selector } from "recoil";

interface Joke {
  id: number;
  content: string;
  status: "like" | "dislike" | null;
}

export const defaultState: Joke[] = [
  {
    id: 1,
    content: `A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."
    The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."
    The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."`,
    status: null,
  },
  {
    id: 2,
    content: `Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"`,
    status: null,
  },
  {
    id: 3,
    content: `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
    status: null,
  },
  {
    id: 4,
    content: `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
    status: null,
  },
];

export const interactionJokes = (
  jokes: Joke[],
  jokeId: number,
  status: "like" | "dislike"
): Joke[] => {
  const res = jokes.map((joke) => {
    const item = { ...joke };
    if (item.id === jokeId) {
      item.status = status;
    }
    return item;
  });
  return res;
};

export const jokesListState = atom<Joke[]>({
  key: "jokesList",
  default: defaultState,
});

export const unTouchJokeState = selector<Joke | null>({
  key: "unTouchJoke",
  get: ({ get }) => {
    const jokesList = get(jokesListState);
    return jokesList.filter((joke) => joke.status === null)[0] || null;
  },
});

export const likeJokesListState = selector<Joke[] | number>({
  key: "likeJokesList",
  get: ({ get }) =>
    get(jokesListState).filter((joke) => joke.status === "like"),
  set: ({ get, set }, jokeId) => {
    if (typeof jokeId === "number") {
      set(
        jokesListState,
        interactionJokes(get(jokesListState), jokeId, "like")
      );
    }
  },
});

export const dislikeJokesListState = selector<Joke[] | number>({
  key: "dislikeJokesList",
  get: ({ get }) =>
    get(jokesListState).filter((joke) => joke.status === "dislike"),
  set: ({ get, set }, jokeId) => {
    if (typeof jokeId === "number") {
      set(
        jokesListState,
        interactionJokes(get(jokesListState), jokeId, "dislike")
      );
    }
  },
});
