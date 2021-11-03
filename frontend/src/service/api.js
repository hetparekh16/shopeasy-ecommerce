import axios from 'axios'

const backendURL = 'http://localhost:8000'

export const authenticateSignUp = async (user) => {
    try {
        return await axios.post(`${backendURL}/signup`, user)
    }
    catch (err) {
        console.log(err);
    }
}
export const authenticateLogIn = async (user) => {
    try {
        return await axios.post(`${backendURL}/login`, user)
    }
    catch (err) {
        console.log(err.message);
    }
}

export const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${backendURL}/payment`, data)
        return response.data
    } catch (error) {
        console.log("Error while calling paytm API", error);
    }
}