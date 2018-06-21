import { userConstants } from '../constants';
import {userService} from "../services";
export const userActions = {
    login,
};

function login(username, password) {
    console.log(2);
    return dispatch=> {
        dispatch(request({username}));
        userService.login(username, password)
            .then(
                user=> {
                    console.log(user)
                }
            );
    };

    function request(user) {return {type: userConstants.LOGIN_REQUEST, user}}
}