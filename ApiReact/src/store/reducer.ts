import { ActionCreator, AnyAction, Reducer } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./me/actions";
import { MeState, meReducer } from "./me/reducer";

export type RootState = {
    commentText: string;
    answComment: string;
    token: any;
    me: MeState;
  }
  
  
  const UPDATE_COMMENT = "UPDATE_COMMENT";
  type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string;
  }
  export const updateComment: ActionCreator<UpdateCommentAction> = (text: string) => ({
    type: UPDATE_COMMENT,
    text,
  })
  
  const UPDATE_ANSWCOMMENT = "UPDATE_ANSWCOMMENT";
  type UpdateAnswCommentAction = {
    type: typeof UPDATE_ANSWCOMMENT;
    Answtext: string;
  }
  export const updateAnswComment: ActionCreator<UpdateAnswCommentAction> = (Answtext: string) => ({
    type: UPDATE_ANSWCOMMENT,
    Answtext,
  })

  const SET_TOKEN = "SET_TOKEN";
  type SetTokenAction = {
    type: typeof SET_TOKEN;
    token: string;
  }
  export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    token,
  })
  
  const initialState: RootState = {
    commentText: "Привет skillbox!",
    answComment: "",
    token: "",
    me: {
      loading: false,
      error: "",
      data: {},
    },
  }


type MyAction = UpdateCommentAction
 | UpdateAnswCommentAction
 | SetTokenAction 
 | MeRequestAction
 | MeRequestSuccessAction
 | MeRequestErrorAction;
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_COMMENT:
        return {
          ...state,
          commentText:action.text
        };
        case UPDATE_ANSWCOMMENT:
          return {
            ...state,
            answComment:action.Answtext
          };
      case SET_TOKEN:
        return {
          ...state,
          token:action.token,
        };
      case ME_REQUEST:
      case ME_REQUEST_SUCCESS:
      case ME_REQUEST_ERROR:
        return { 
          ...state,
          me: meReducer(state.me, action)
        }
      default:
        return state;
    }
  }