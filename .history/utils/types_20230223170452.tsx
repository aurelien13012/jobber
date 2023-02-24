export interface Result {
    data?: object,
    err?: string, 
    message? : string
}

export type informations = {
    email: string,
    password: string,
    name?: string,
    firstName?: string,
    companyName?: string
}