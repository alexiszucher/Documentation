import { userService } from "./Users.service";

export const authService = {
    connect: (email, password) => (
        userService.findUser(email,password)
    )
};