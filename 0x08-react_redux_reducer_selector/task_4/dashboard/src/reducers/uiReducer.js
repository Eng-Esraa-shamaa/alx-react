import react from "react";
import { LOGIN } from "../actions/uiActionTypes";
import { LOGOUT } from "../actions/uiActionTypes";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { HIDE_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { LOGIN_SUCCESS } from "../actions/uiActionTypes";
import { LOGIN_FAILURE } from "../actions/uiActionTypes";
import {Map} from "immutable"



const initialState = Map ({
    isNotificationDrawerVisible : false,
    isUserLoggedIn : false,
    user : Map({}),
});
export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case LOGOUT:
            return state.set("user", Map({}));
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set("isNotificationDrawerVisible", true);
        case HIDE_NOTIFICATION_DRAWER:
            return state.set("isNotificationDrawerVisible", false);
        case LOGIN_SUCCESS:
            return state.set("isUserLoggedIn", true);
        case LOGIN_FAILURE:
            return state.set("isUserLoggedIn", false);
        default:
            return state;
    }

}
