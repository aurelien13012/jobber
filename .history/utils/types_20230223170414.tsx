export interface Result {
    data?: object,
    err?: string, 
    message? : string
    // response : {
    //     err : string,
    //     data : object
    // }
}

export type informations = {
    email: string,
    password: string,
    name?: string,
    firstName?: string,
    companyName?: string
}