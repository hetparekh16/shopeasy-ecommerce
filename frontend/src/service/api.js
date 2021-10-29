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