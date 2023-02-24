// export type Response = {
//     data?: {
//         company?: string | undefined,
//         email: string,
//         password: string,
//         familyName?: string | undefined,
//         name?: string | undefined
//     },
//     error?: string,
// }

export type Response = {
    data?: string | object,
    error?: string,
}

export type informations = {
    email: string,
    password: string,
    name?: string,
    firstName?: string,
    company?: string
}