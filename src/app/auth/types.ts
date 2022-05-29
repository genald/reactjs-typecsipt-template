
export interface LoginError {
    code   : number
    message: string
}

export interface Auth {
    token?: string
    error?: LoginError
}

export interface LoginForm {
    username?: string
    password?: string
}


export const initialState: Auth = {}