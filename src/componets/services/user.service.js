import axios from 'axios';
import  '../mock/login_mock';
export const userService = {
    login,
};

function login(username, password) {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username,password})
    };

    return axios.post("http://app.airmacau.com.mo/etl/api/login.ashx",requestOptions)
        .then(handleResponse)

}


function handleResponse(response){
    return response.json().then(data=>{
        console.log(data);
    })
}