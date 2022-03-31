export interface User {
    id: number,
    username: string,
    firstName: string,
    lastName: string,
    aboutMe: string
}

export interface UserSlim {
    id: number,
    username: string
}