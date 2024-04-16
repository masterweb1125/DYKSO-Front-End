import axios from "axios";
import { setUserData, LogOutUser } from "../feature/reduxSlice";

// export const BASE_API = process.env.NEXT_PUBLIC_DOMAIN_URL;
export const BASE_API = "http://localhost:8080";
export const API_DOMAIN = axios.create({ baseURL: BASE_API });


// creating new user
export const CreatingUser = async (dispatch, userData) => {
    try {
        const res = await API_DOMAIN.post(`/api/v1/auth/signup`, userData);
        dispatch(setUserData(res.data));
         console.log("res.body: ", res.data)
        return res.status;
    } catch (err) {
        console.log(
          "Something went wrong while creating an user",
          err?.response
        );

        return err?.response;
    }
};

// creating new user
export const Login = async (dispatch, userData) => {
    try {
        const res = await API_DOMAIN.post(`/api/v1/auth/signin`, userData);
        dispatch(setUserData(res.data));
        return res.status;
    } catch (err) {
        console.log(
          "Something went wrong while login",
          err?.response
        );
        return err?.response;
        
    }
};




