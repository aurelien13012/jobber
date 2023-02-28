import { post } from "../dataApi";
import { validEmail, validPassword } from "../regex";
import { informations, Response } from "../types";
import { recruiter, talent } from "../variables";

const apiUrl = "http://192.168.1.10:3000";

export const handleConnection = async (type: string | undefined, { ...args }: informations): Promise<Response> => {

    const { email, password, company, name, firstName } = args;

    if (validEmail(email)) {
        if (type === recruiter && password && email && company) {
            const data = await post(`${apiUrl}/user/recruiter/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    company
                })
            })
            console.log("data dans utils", data)
            return data;
        }
        if (type === talent && password && email && firstName && name) {
            const data = await post(`${apiUrl}/user/talent/signup`, {
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
            console.log("data dans utils", data)
            return data;
        }
        if (password) {
            console.log("je suis dans le dernier")
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
        return { error: "Merci de compléter tous les champs" }
    }
    return { error: "Merci de rentrer un email valide" }
}
