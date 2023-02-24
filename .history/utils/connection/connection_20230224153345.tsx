import { validEmail } from "../regex";
import { Response } from "../types";

export const connection = (email: string, password: string): Promise<Response> => {
    if (validEmail(email)) {
        if (password) {
return ({data : {}})
        }
        return { error: "Merci de remplir tous les champs" }
    }
    return { error: "Email non valide" }
}