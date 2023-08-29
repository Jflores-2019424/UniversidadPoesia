
const URL = "http://localhost:300/api/"

export const createUser = async (carnet, name, direction, gender, phone, birthDate, course, poetryType, inscriptionDate, contestDate) =>{
    try{
        const user = {carnet, name, direction, gender, phone, birthDate, course, poetryType, inscriptionDate, contestDate}
        const response = await axios.post(`${URL}create-user`, user)
        return response.data
    }catch(err){
        throw new Error(err)
    }
}