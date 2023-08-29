import axios from "axios";

const URL = "http://localhost:3000/api/"
export const listUsers = async () =>{
    try{
        const response = await axios.get(`${URL}list-users`);
        return response.data.users;
    }catch(err){
        throw new Error(err)
    }
}