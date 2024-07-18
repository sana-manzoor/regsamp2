import { commonApi } from "./commonrequest";
import { BASE_URL } from "./baseUrl";


//to login
 export const loginApi=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/user/login`,data,'')


}

//to add project
export const addUserApi=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/user/register`,data,'')
}

// //to update project
export const editApi=async(data,id)=>{
    return await commonApi("PUT",`${BASE_URL}/user/edit/${id}`,data,'')
}
