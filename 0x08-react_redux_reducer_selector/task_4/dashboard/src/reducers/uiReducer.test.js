import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';
import { Map } from 'immutable';

describe('uiReducer', () => {
  it('returns initial state when no action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({})
    });
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('returns initial state when SELECT_COURSE action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({})
    });
    const action = { type: 'SELECT_COURSE' };
    expect(uiReducer(initialState, action)).toEqual(initialState);
  });

  it('changes isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({})
    });
    const expectedState = Map({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: Map({})
    });
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });
});

