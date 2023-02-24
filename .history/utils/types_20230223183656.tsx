export type Response = {
    data?: string | object,
    error?: string | object, 
}

export type informations = {
    email: string,
    password: string,
    name?: string,
    firstName?: string,
    companyName?: string
}