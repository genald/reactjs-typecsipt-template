import { RootStateKeyType } from './injectorTypings';
import {
    createSlice as createSliceOriginal,
    SliceCaseReducers,
    CreateSliceOptions,
} from '@reduxjs/toolkit';

/* Wrap createSlice with stricter Name options */

/* istanbul ignore next */
const createSlice = <
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends RootStateKeyType
>(
    options: CreateSliceOptions<State, CaseReducers, Name>,
) => {
    return createSliceOriginal(options);
};

export default createSlice;