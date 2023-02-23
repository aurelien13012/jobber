// export const handleFirstConnectionCompany = (companyName: string, email: string, password: string) => {
//     console.log(email, companyName, password)
// }

import { get, post } from "../dataApi";
import { validEmail, validPassword } from "../regex";
import { informations, Result } from "../types";
import { recruiter, talent } from "../variables";

require('dotenv').config();

const apiUrl = process.env.API_URL || "http://localhost:3000"

// type informations = {
//     email: string,
//     password: string,
//     name?: string,
//     firstName?: string,
//     companyName?: string
// }

// type Result = {
//     data ? : object,
//     error ? : string
// }

// TODO voir comment on fait pour pouvoir destructurer la réponse pck on va avoiur un objet avec data qui sera un objet et error 
//TODO faire l appel et la verif + creation en back + hash password

export const handleFirstConnection = (type: string, { ...args }: informations): string | Promise<Result> => {

    console.log("args, args", args)

    const { email, password, companyName, name, firstName } = args;

    if (validEmail(email)) {
        if (type === recruiter && password && email && companyName) {
            return post(`${apiUrl}/user/recruiter/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    companyName
                })
            })
        }
        if (type === talent && password && email && firstName && name) {
            // return post(`${apiUrl}/user/talent/signin`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         email,
            //         password,
            //         firstName,
            //         name
            //     })
            // })
            // return get(`${apiUrl}/user/test`)
        }
        return "Merci de compléter tous les champs"
    }
    return "Merci de rentrer un email valide"
}

