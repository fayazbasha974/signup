import { USER_LOGIN,LOGIN_URL } from "../constants/Constants";
import axios from "axios";

export const Login = (data,type) = (dispatch) => {
    console.log(data);
    if(type === "manual"){
        axios.post(LOGIN_URL,data)
        .then((res)=>{
            if(res.data.data){
                dispatch({
                    type: USER_LOGIN,
                    data: res.data.data
                });
            }
        })
        .catch((error)=>{
            console.log(err)
        });
    }else {
        dispatch({
            type: USER_LOGIN,
            data: data
        });
    }
    
};