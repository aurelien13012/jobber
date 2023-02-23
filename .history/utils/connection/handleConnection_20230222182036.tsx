// export const handleFirstConnectionCompany = (companyName: string, email: string, password: string) => {
//     console.log(email, companyName, password)
// }

import { validEmail, validPassword } from "../regex";
import {recruiter, talent} from "../variables";

type informations = {
    email: string,
    password: string,
    name?: string,
    firstName?: string,
    companyName?: string
}

type Result = {
    data ? : any,
    error ? : any
}

// TODO voir comment on fait pour pouvoir destructurer la réponse pck on va avoiur un objet avec data qui sera un objet et error 
//TODO faire l appel et la verif + creation en back + hash password

export const handleFirstConnection = async (type: string, { ...args }: informations): Promise<string | Result> => {

    console.log("args, args", args)

    const { email, password, companyName, name, firstName } = args;

    if(validEmail(email)) {
        if(type === recruiter && password && email && companyName) {
            //faire le fetch
        }
        if(type === talent && password && email && firstName && name) {
            //faire le fetch
            // return {data : "bonjour"}
        }
        return "Merci de compléter tous les champs"
    }
    return "Merci de rentrer un email valide"
}

