import { userConstants } from '../constants';
import {userService} from "../services";
import {history} from "../helper";

export const userActions = {
    login,
};

function login(username, password) {

    return dispatch=> {
        dispatch(request({username}));
        userService.login(username, password)
            .then(
                user=> {
                    console.log('service', user);
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    console.log('service', error);
                    dispatch(failure(error.toString()));

                }
            );
    };

    function request(user) {return {type: userConstants.LOGIN_REQUEST, user}}
    function success(user) {return {type: userConstants.LOGIN_SUCCESS, user}}
    function failure(error) {return { type: userConstants.LOGIN_FAILURE, error }}
}