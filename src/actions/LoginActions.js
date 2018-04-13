import { USER_LOGIN, LOGIN_URL, ALERT_CONFIG } from "../constants/Constants";
import axios from "axios";
import Alert from 'react-s-alert';

export const Login = (data,type,context) => (dispatch) => {
    console.log(data);
    if(type === "manual"){
        axios.post(LOGIN_URL,data)
        .then((res)=>{
            if(res.data.data){
                dispatch({
                    type: USER_LOGIN,
                    data: res.data.data
                });
            localStorage.setItem("userDetails",JSON.stringify(res.data.data));
            context.history.push("/dashboard/userdetails");
            }else {
                Alert.error("Invalid user details",ALERT_CONFIG);
                context.history.push("/");
            }
        })
        .catch((error)=>{
            console.log(error);
            Alert.error(error,ALERT_CONFIG);
        });
    }else{
        let responseData;
        if(type === "facebook"){
            let names = data.name.split(" ");
            responseData = [
                {
                    firstname: names[0],
                    lastname: names[1],
                    email: data.email,
                    image: data.picture.data.url
                }
            ];
            
        }else {
            let names = data.profileObj.name.split(" ");
            responseData = [{
                email: data.profileObj.email,
                firstname: names[0],
                lastname: names[1],
                image: data.profileObj.imageUrl
            }];
        };
        localStorage.setItem("userDetails",JSON.stringify(responseData));
        dispatch({
            type: USER_LOGIN,
            data: responseData
        });
        context.history.push("/dashboard/userdetails");
    }
};