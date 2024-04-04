import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('returns initial state when no action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    };
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('returns initial state when SELECT_COURSE action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    };
    const action = { type: 'SELECT_COURSE' };
    expect(uiReducer(initialState, action)).toEqual(initialState);
  });

  it('changes isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    };
    const expectedState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {}
    };
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });
});

