import { get, post } from "../dataApi";
import { validEmail, validPassword } from "../regex";
import { informations, Result } from "../types";
import { recruiter, talent } from "../variables";

const apiUrl = "http://localhost:3000";
// 192.168.1.10

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

export const handleFirstConnection = (type: string, { ...args }: informations): string | Promise<Result> => {

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
            return get(`${apiUrl}/user/test`)
        }
        return "Merci de compléter tous les champs"
    }
    return "Merci de rentrer un email valide"
}

