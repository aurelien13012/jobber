// export type Response = {
//     data?: string | object,
//     error?: string,
// }

interface Resolve {
    type : "data"
    data : {
        id : string,
        company? : string,
        familyName? : string,
        name ? : string,
        password : string,
        jobDescription? : string[],
        jobTitle ? : string,
        experience? : string[]
    }
}

interface Reject {
    error : string
}

export type Response = Resolve | Reject

export type informations = {
    email: string,
    password: string,
    name?: string,
    firstName?: string,
    company?: string
}