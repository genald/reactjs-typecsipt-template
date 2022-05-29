import { createSelector } from "@reduxjs/toolkit";
import RootState from "app/store/root";
import { initialState } from "./types";

const selectDomain = [(state: RootState) => state.auth || initialState]

class AuthSelector {
    public static token         = createSelector(selectDomain, state => state.token)
    public static authenticated = createSelector(selectDomain, state => !!state.token)
}
export default AuthSelector