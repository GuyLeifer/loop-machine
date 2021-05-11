import { atom, selector } from 'recoil';

export const powerState = atom({
    key: 'powerState',
    default: false,
});

export const beatsPlayedState = atom({
    key: 'beatPlayedState',
    default: 0,
});

export const startTimeState = atom({
    key: 'startTimeState',
    default: null,
});

export const endTimeState = atom({
    key: 'endTimeState',
    default: null,
});

export const timeToNextLoopState = selector({
    key: 'timeToNextLoopState',
    get: ({ get }) => {
        const startTime = get(startTimeState);
        const endTime = get(endTimeState);

        return endTime - startTime;
    },
});