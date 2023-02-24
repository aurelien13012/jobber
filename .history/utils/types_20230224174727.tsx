export type Response = {
    data?: {
        company?: string,
        email: string,
        password: string,
        familyName?: string,
        name?: string
    },
    error?: string,
}

export type informations = {
    email: string,
    password: string,
    name?: string,
    firstName?: string,
    company?: string
}