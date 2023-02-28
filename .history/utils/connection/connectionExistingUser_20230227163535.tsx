import { post } from "../dataApi";
import { validEmail } from "../regex";
import { Response } from "../types";

const apiUrl = "http://192.168.1.10:3000";

export const connectionExistingUser = async (email: string, password: string): Promise<Response> => {
    if (validEmail(email)) {
        if (password) {
            const data = await post(
                `${apiUrl}/user/signin`, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    })
                })
                return data
        }
        return { error: "Merci de remplir tous les champs" }
    }
    return { error: "Email non valide" }
}