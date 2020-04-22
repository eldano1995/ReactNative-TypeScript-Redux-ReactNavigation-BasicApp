import customAxios from "../utils/customAxios"

const signIn = (username: string, password: string) => {
    const url = "http://facebook.com/login"
    const data = { username, password }

    return customAxios.post(url, data)
}


const userService = {
    signIn
}

export default userService