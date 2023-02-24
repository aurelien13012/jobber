import { get, post } from "../dataApi";
import { validEmail, validPassword } from "../regex";
import { informations, Response } from "../types";
import { recruiter, talent } from "../variables";

const apiUrl = "http://192.168.1.10:3000";

export const handleFirstConnection = async (type: string, { ...args }: informations): Promise<Response> => {

    const { email, password, companyName, name, firstName } = args;

    if (validEmail(email)) {
        if (type === recruiter && password && email && companyName) {
            return post(`${apiUrl}/user/recruiter/signup`, {
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
            return post(`${apiUrl}/user/talent/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    firstName,
                    name
                })
            })
            // const result = await get(`${apiUrl}/user/test`);
            // return result;
            // return get(`${apiUrl}/user/test`);
        }
        return {error : "Merci de compléter tous les champs"}
    }
    return {error : "Merci de rentrer un email valide"}
}

