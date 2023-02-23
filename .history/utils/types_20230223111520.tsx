export type Result = {
    data ? : object,
    error ? : string
}

type informations = {
    email: string,
    password: string,
    name?: string,
    firstName?: string,
    companyName?: string
}