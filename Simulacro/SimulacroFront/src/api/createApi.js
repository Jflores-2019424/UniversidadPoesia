import axios from "axios"

const URL = "http://localhost:3000/api/"

export const createUser = async (carnet, name, direction, gender, phone, birthDate, course, poetryType, inscriptionDate, contestDay ) =>{
    try{
        const users = {carnet, name, direction, gender, phone, birthDate, course, poetryType, inscriptionDate, contestDay}
        const response = await axios.post(`${URL}create-user`, {
            carnet: carnet, 
            name: name, 
            direction: direction, 
            gender: gender, 
            phone: phone, 
            birthDate: birthDate, 
            course: course,
            poetryType: poetryType, 
            inscriptionDate: inscriptionDate, 
            contestDay: contestDay
        })
        return response.data
    }catch(err){
        throw new Error(err)
    }
}