import { Action, ActionCreator } from "redux";
import { RootState, setToken } from "../reducer";
import axios from "axios";
import { ThunkAction } from "redux-thunk";

export const ME_REQUEST = "ME_REQUEST";
export type MeRequestAction = {
    type: typeof ME_REQUEST;
}
export const meRequest: ActionCreator<MeRequestAction> = () => ({
    type: ME_REQUEST,
});

export interface IUserData {
    name?: string;
    iconImg?: string;
}

export const ME_REQUEST_SUCCESS = "ME_REQUEST_SUCCESS";
export type MeRequestSuccessAction = {
    type: typeof ME_REQUEST_SUCCESS;
    data: IUserData;
}
export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
    type: ME_REQUEST_SUCCESS,
    data,
});

export const ME_REQUEST_ERROR = "ME_REQUEST_ERROR";
export type MeRequestErrorAction = {
    type: typeof ME_REQUEST_ERROR;
    error: string;
}
export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
    type: ME_REQUEST_ERROR,
    error,
});

export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(meRequest());
        axios
        .get("https://oauth.reddit.com/api/v1/me.json", {
            headers: { Authorization: `bearer ${getState().token}`}
        })

        .then((resp) => {
            const userData = resp.data;
            dispatch(meRequestSuccess({ name: userData.name, iconImg: userData.icon_img.split("?")[0]}));
        })
        .catch((error) => {
            console.log(error);
            dispatch(meRequestError(String(error)));
        });
}

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    if (window.__token__) {
        dispatch(setToken(window.__token__))
    }
}