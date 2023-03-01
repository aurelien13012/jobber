export type Response = {
    token?: string,
    error?: string,
};

export type informations = {
    email: string,
    password: string,
    name?: string,
    firstName?: string,
    company?: string
};

export type DecodedToken = {
    name?: string,
    company?: string
};