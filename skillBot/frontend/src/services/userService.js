import axios from "axios";

const USER_API_BASE_URL = "http://localhost:2018/api/v1/user";

const AUTH_API_BASE_URL = "http://localhost:2018/auth";

class UserService {

    //Public Route
    saveUser(user) {
        return axios.post(AUTH_API_BASE_URL + "/register", user);
    }

    //Public Route
    loginUserWithEmailAndPassword(user) {
        return axios.post(AUTH_API_BASE_URL + "/login", user);
    }

    getUsers() {
        return axios.get("/get");
    }

    getUserByEmail(email, token) {
        return axios.get(USER_API_BASE_URL + "/get/" + email, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
    }
}

export default new UserService();
