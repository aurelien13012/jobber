import { validEmail } from "../regex";
import { Response } from "../types";

const apiUrl = "http://192.168.1.10:3000";

export const connectionExistingUser = (email: string, password: string): Promise<Response> => {
    if (validEmail(email)) {
        if (password) {
// return ({data : {}})
        }
        // return { error: "Merci de remplir tous les champs" }
    }
    // return { error: "Email non valide" }
    return {error : "tests"}
}