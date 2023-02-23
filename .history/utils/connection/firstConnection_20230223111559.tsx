// export const handleFirstConnectionCompany = (companyName: string, email: string, password: string) => {
//     console.log(email, companyName, password)
// }

import { post } from "../dataApi";
import { validEmail, validPassword } from "../regex";
import { informations, Result } from "../types";
import {recruiter, talent} from "../variables";

require('dotenv').config();

const apiUrl : string = process.env.API_URL

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

    if(validEmail(email)) {
        if(type === recruiter && password && email && companyName) {
            //faire le fetch
            return post(apiUrl, {

            })
        }
        if(type === talent && password && email && firstName && name) {
            //faire le fetch
            // return {data : "bonjour"}
        }
        return "Merci de compléter tous les champs"
    }
    return "Merci de rentrer un email valide"
}

