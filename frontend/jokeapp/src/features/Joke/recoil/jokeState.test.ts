import { snapshot_UNSTABLE } from 'recoil';
import {
  defaultState,
  interactionJokes,
  jokesListState,
  unTouchJokeState,
} from './jokeState';

describe('Test unTouchJokeState', () => {
  test('Should return first joke when initial state', () => {
    const initialSnapshot = snapshot_UNSTABLE();
    expect(
      initialSnapshot.getLoadable(unTouchJokeState).valueOrThrow()?.id
    ).toBe(1);
  });

  test('Should return second joke when like first joke', () => {
    const jokesAfterLike = interactionJokes(defaultState, 1, 'like');
    const snapshot = snapshot_UNSTABLE(({ set }) =>
      set(jokesListState, jokesAfterLike)
    );

    expect(snapshot.getLoadable(unTouchJokeState).valueOrThrow()?.id).toBe(2);
  });

  test('Should return third joke when dislike 2 times', () => {
    let jokesAfterDislike = interactionJokes(defaultState, 1, 'dislike');
    jokesAfterDislike = interactionJokes(jokesAfterDislike, 2, 'dislike');

    const snapshot = snapshot_UNSTABLE(({ set }) =>
      set(jokesListState, jokesAfterDislike)
    );

    expect(snapshot.getLoadable(unTouchJokeState).valueOrThrow()?.id).toBe(3);
  });

  test('Should return null joke when dislike over 4 times', () => {
    let jokesAfterDislike = interactionJokes(defaultState, 1, 'dislike');
    jokesAfterDislike = interactionJokes(jokesAfterDislike, 2, 'dislike');
    jokesAfterDislike = interactionJokes(jokesAfterDislike, 3, 'dislike');
    jokesAfterDislike = interactionJokes(jokesAfterDislike, 4, 'dislike');

    const snapshot = snapshot_UNSTABLE(({ set }) =>
      set(jokesListState, jokesAfterDislike)
    );

    expect(snapshot.getLoadable(unTouchJokeState).valueOrThrow()).toBe(null);
  });
});
