import { atom } from 'recoil';

export const widthState = atom({
    key: 'widthState',
    default: false,
});

export const loopStartState = atom({
    key: 'loopStartState',
    default: false,
});

export const playAllState = atom({
    key: 'playAllState',
    default: false,
});

export const playRecordState = atom({
    key: 'playRecordState',
    default: false,
});

export const recordState = atom({
    key: 'recordState',
    default: false,
});

export const recordObjectState = atom({
    key: 'recordObjectState',
    default: [],
});

export const startTimeState = atom({
    key: 'startTimeState',
    default: null,
});

export const endTimeState = atom({
    key: 'endTimeState',
    default: null,
});