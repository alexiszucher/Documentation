import axios from "axios";

export const userService = {
    getUsers: () => axios.get(`http://localhost:4000/users`).then((response) => response.data).catch((err) => console.log(err)),

    findUser: (email, password) => (
        userService.getUsers().then((data) => (
            data.find(user => user.email === email && user.password === password)
        ))
    )
    
}