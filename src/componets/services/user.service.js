import axios from 'axios';
import qs from 'qs';
import '../mock/login_mock';
export const userService = {
    login,
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        auth: qs.stringify({username,password})
    };

    return axios.post("http://app.airmacau.com.mo/etl/api/login.ashx",requestOptions)
        .then(response=> {
            console.log(response);
            const sid = response.data.SID;
            if(sid.length > 16){
                localStorage.setItem('sid' , JSON.stringify(sid));
            }else {
                if(response.status === 401){
                    window.location.reload(true);
                }
                const error = (response.statusText);
                return Promise.reject(error);
            }

            return response.data;
        })

}


