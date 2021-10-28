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